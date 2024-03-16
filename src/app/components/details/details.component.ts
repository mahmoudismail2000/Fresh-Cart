import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/core/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService,
    private _Renderer2:Renderer2,
    private _CartService:CartService,
    private _ToastrService:ToastrService
    ){}

  productId:any=''
  productDetails:Product={} as Product

  detailsSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: false,
  }


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId=params.get('id')
        console.log(this.productId);
        

      }
    })
    this._ProductsService.getSpecificProduct(this.productId).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.productDetails=response.data
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })


    
  }

  addProductDetailsToCart(productId:string,element:HTMLButtonElement):void
  {
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.addProductToCart(productId).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.status=='success'){
          this._ToastrService.success(response.message)
          this._Renderer2.removeAttribute(element,'disabled')
          this._CartService.countProductsInCart.next(response.numOfCartItems)

        }
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._Renderer2.removeAttribute(element,'disabled')
        
        
      }
    })

  }

}

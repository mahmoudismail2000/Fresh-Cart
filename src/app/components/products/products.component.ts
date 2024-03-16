import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CutTextPipe } from 'src/app/core/pipes/cut-text.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CutTextPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(
    private _ProductsService:ProductsService ,
    private _Renderer2:Renderer2 ,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _WishListService:WishListService
    ){}
  products:Product[]=[]
  sizeLimit:number=0;
  totalProducts:number=0
  currentPage:number=1



  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
       
        this.products=response.data
        this.sizeLimit=response.metadata.limit
        this.totalProducts=response.results
        this.currentPage=response.metadata.currentPage
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        

      }
    })

    // 3lshan tsm3 fe el navbar lma a3ml loading
    
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        console.log(response. numOfCartItems);
        this._CartService.countProductsInCart.next(response. numOfCartItems)
      
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        

      }
    })
    this._WishListService.getUserWishlist().subscribe({
      next:(response)=>{
       
        this._WishListService.countOfProductsInWishlist.next(response.count)
        
      
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        

      }
    })
    
  }
  addProductHomeToCart(productId:string,element:HTMLButtonElement):void
  {
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.addProductToCart(productId).subscribe({
      next:(response)=>{
       
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
  pageChanged(eventInfo:any):void
  {
    
    this._ProductsService.getAllProducts(eventInfo).subscribe({
      next:(response)=>{
       
        this.products=response.data
        this.sizeLimit=response.metadata.limit
        this.totalProducts=response.results
        this.currentPage=response.metadata.currentPage
    
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        
      }
    })
    

  }

}

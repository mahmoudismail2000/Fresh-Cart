import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category, Product } from 'src/app/core/interfaces/product';
import { CutTextPipe } from 'src/app/core/pipes/cut-text.pipe';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutTextPipe,SearchPipe,FormsModule,CarouselModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private _ProductsService:ProductsService,
    private _CategoriesService:CategoriesService,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
    private _Renderer2:Renderer2,
    private _WishListService:WishListService
    ){}
  
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false,
    autoplay:true,
    autoplaySpeed:1000
  }
  categoriesSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true,
    autoplay:true
  }

  products:Product[]=[]
  categories!:Category[]
  searchText:string=''
  productsIdInFav:any[]=[]
 
  ngOnInit(): void {
    
    
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        this.products=response.data 
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);    
      }
    })
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{ 
             
        this.categories=response.data
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })

    this._CartService.getUserCart().subscribe({
      
      next:(response)=>{
        
        this._CartService.countProductsInCart.next(response.numOfCartItems)
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

  addProductToFav(productId:string):void
  {
    this._WishListService.addProductToWishlist(productId).subscribe({
      next:(response)=>{
        this.productsIdInFav=response.data
        this._ToastrService.success(response.message)
        this._WishListService.countOfProductsInWishlist.next(response.data.length)
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })

  }

  removeProductFromFav(productId:string):void
  {
    this._WishListService.removeProductFromWishlist(productId).subscribe({
      next:(response)=>{
        this.productsIdInFav=response.data
        this._WishListService.countOfProductsInWishlist.next(response.data.length)
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })

  }



  



}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(
    private _CartService:CartService,
    private _Renderer2:Renderer2,
    private _WishListService:WishListService
    ){}

  productsInCart:any=null



  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        
        if(response.status=='success'){
          this.productsInCart=response.data
          this._CartService.countProductsInCart.next(response. numOfCartItems)

          
        }
        

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

  removeProduct(productId:any,element:HTMLButtonElement):void
  {
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.removeProductFromCart(productId).subscribe({
      next:(response)=>{
        
        this.productsInCart=response.data
        this._Renderer2.removeAttribute(element,'disabled')
        this._CartService.countProductsInCart.next(response.numOfCartItems)
        
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._Renderer2.removeAttribute(element,'disabled')
        

      }
    })

  }

  updateProductQuantity(productId:any,count:any,element:HTMLButtonElement):void
  {
    this._Renderer2.setAttribute(element,'disabled','true')
    if(count>=1){
      this._CartService.updateCartProductQuantity(productId,count).subscribe({
        next:(response)=>{
          
          this.productsInCart=response.data
          this._Renderer2.removeAttribute(element,'disabled')
          
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          this._Renderer2.removeAttribute(element,'disabled')
          
  
        }
        
      })
    }else{
      this._Renderer2.removeAttribute(element,'disabled')
    }

  }

  clearProducts(clearElement:any):void
  {
    this._Renderer2.setAttribute(clearElement,'disabled','true')
    this._CartService.clearAllProductInCart().subscribe({
      next:(response)=>{
        
        this.productsInCart=null

        this._Renderer2.removeAttribute(clearElement,'disabled')
        this._CartService.countProductsInCart.next(0)
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this._Renderer2.removeAttribute(clearElement,'disabled')
        

      }
      
    })
    
  }

  


}

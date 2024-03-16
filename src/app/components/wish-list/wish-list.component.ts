import { CutTextPipe } from './../../core/pipes/cut-text.pipe';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,RouterLink,CutTextPipe],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{
  constructor(
    private _WishListService:WishListService,
    private _Renderer2:Renderer2,
    private _ToastrService:ToastrService,
    private _CartService:CartService
    ){}

  products:Product[]=[]        // [{product},{product},{product}]
  productsIdInFav:any[]=[]     // ["id","id","id"]

 
ngOnInit():void
  {
    this._WishListService.getUserWishlist().subscribe({          // [{},{},{}]
      next:(response)=>{
        
        
        this.products=response.data
        let productsId:any=this.products.map((item)=>item._id)
        this.productsIdInFav=productsId
        this._WishListService.countOfProductsInWishlist.next(response.count) 
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        
        this._CartService.countProductsInCart.next(response. numOfCartItems)
      
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
removeProductFromFav(productId:string):void
{
  this._WishListService.removeProductFromWishlist(productId).subscribe({
    next:(response)=>{
      
      this.productsIdInFav=response.data
      this.products=this.products.filter((item)=>this.productsIdInFav.includes(item._id))
      this._WishListService.countOfProductsInWishlist.next(response.data.length) 
      
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  })

}
}

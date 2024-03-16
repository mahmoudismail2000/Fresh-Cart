import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/core/interfaces/product';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  allCategories:Category[]=[]
  constructor(
    private _CategoriesService:CategoriesService,
    private _WishListService:WishListService,
    private _CartService:CartService
    ){}
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{
        this.allCategories=response.data
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        

      }
    })
    // 3lshan tsm3 fe el navbar lma a3ml loading
    
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
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

}

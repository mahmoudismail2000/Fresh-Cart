import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsService } from 'src/app/core/services/brands.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Brand } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  constructor(
    private _BrandsService:BrandsService,
    private _WishListService:WishListService,
    private _CartService:CartService
    ){}

  allBrands:Brand[]=[]


  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{
        this.allBrands=response.data
        

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

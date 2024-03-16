import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CheckOutService } from 'src/app/core/services/check-out.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Order } from 'src/app/core/interfaces/order';
import { CutTextPipe } from 'src/app/core/pipes/cut-text.pipe';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CommonModule,CutTextPipe],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
  constructor(
    private _CartService:CartService,
    private _WishListService:WishListService,
    private _CheckOutService:CheckOutService,
    private _AuthService:AuthService
    ){}

    userId:string=''
    allOrders:Order[]=[]


    

    ngOnInit(): void {
      this._AuthService.getUserInfo()
      this.userId=this._AuthService.userData.id
      this._CheckOutService.getAllUserOrders(this.userId).subscribe({
        next:(response)=>{
          
          this.allOrders=response
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

import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  constructor(
    private _Router:Router,
    private _CartService:CartService,
    private _Renderer2:Renderer2,
    private _WishListService:WishListService){}

  productCountInCart:any=0
  productCountInWishlist:any=0

  @ViewChild('navbar')navbarRef!:ElementRef
  

  @HostListener('window:scroll')
  scrollAction(){
    if(scrollY>=300){
      this._Renderer2.addClass(this.navbarRef.nativeElement,'px-5')
    }else{
      this._Renderer2.removeClass(this.navbarRef.nativeElement,'px-5')
    }
  }


  ngOnInit(): void {
    this._CartService.countProductsInCart.subscribe({
      next:(response)=>{
        this.productCountInCart=response
        
      }
    })
    this._WishListService.countOfProductsInWishlist.subscribe({
      next:(response)=>{
        
        this.productCountInWishlist=response
        

      }
    })
  }

  signOutHandle():void
  {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login'])
  }

}

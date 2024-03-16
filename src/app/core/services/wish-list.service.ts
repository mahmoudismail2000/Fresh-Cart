import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'

  constructor(private _HttpClient:HttpClient) { }

  countOfProductsInWishlist:BehaviorSubject<number>=new BehaviorSubject(0)

  addProductToWishlist(product_Id:string):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+'wishlist',{
      productId:product_Id
    })
  }

  getUserWishlist():Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+'wishlist')

  }

  removeProductFromWishlist(productId:string):Observable<any>
  {
    return this._HttpClient.delete(this.baseUrl+`wishlist/${productId}`)

  }
}

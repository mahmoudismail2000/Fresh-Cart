import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  countProductsInCart:BehaviorSubject<number> = new BehaviorSubject(0)

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
 

  addProductToCart(productId:string):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+'cart',
    {
      productId: productId
    }
    ,
    )

  }

  getUserCart():Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+'cart',)

  }

  removeProductFromCart(productId:any):Observable<any>
  {
    return this._HttpClient.delete(this.baseUrl+`cart/${productId}`,)

  }

  updateCartProductQuantity(productId:any,countProduct:any):Observable<any>
  {
    return this._HttpClient.put(this.baseUrl+`cart/${productId}`,{
      count:countProduct
    },
    )

  }

  clearAllProductInCart():Observable<any>
  {
    return this._HttpClient.delete(this.baseUrl+'cart',
    )

  }

}

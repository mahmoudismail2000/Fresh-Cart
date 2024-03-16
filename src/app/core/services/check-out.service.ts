import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor(private _HttpClient:HttpClient) { }

  headers:any={token:localStorage.getItem('eToken')}

  checkOut(userID:string,userData:any):Observable<any>  
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${userID}?url=https://mahmoudismail2000.github.io/Fresh-Cart`,userData,{
      headers:this.headers
    })

  }

  getAllUserOrders(userId:string):Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)

  }
}

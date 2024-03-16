import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'

  getAllProducts(pageNum:number=1):Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+`products?page=${pageNum}`)

  }

  getSpecificProduct(productId:any):Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+`products/${productId}`)
  }

  
}

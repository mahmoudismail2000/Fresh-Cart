import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPAsswordService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string='https://ecommerce.routemisr.com/api/v1/auth/'

  forgotPassword(email:object):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+'forgotPasswords',email)

  }
   verifyResetCode(resetCode:any):Observable<any>
   {
    return this._HttpClient.post(this.baseUrl+'verifyResetCode',resetCode)

   }

   updateResetPassword(resetPassword:object):Observable<any>
   {
    return this._HttpClient.put(this.baseUrl+'resetPassword',resetPassword)

   }
}

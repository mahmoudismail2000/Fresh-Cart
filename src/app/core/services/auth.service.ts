import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  authBaseUrl='https://ecommerce.routemisr.com/api/v1/auth/'

  userData:any=''

  register(userData:object):Observable<any>
  {
    return this._HttpClient.post(this.authBaseUrl+'signup',userData)

  }

  login(userData:any):Observable<any>
  {
    return this._HttpClient.post(this.authBaseUrl+'signin',userData)

  }
  getUserInfo():void
  {
    if(localStorage.getItem('eToken')){
      let encodeData:any=localStorage.getItem('eToken')
      let decodeData:any=jwtDecode(encodeData)
      this.userData=decodeData
    }
    
  }

  changePassword(objectChange:object):Observable<any>
  {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',objectChange)

  }

  updateUserData(newUserData:object):Observable<any>
  {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',newUserData)
  }
}

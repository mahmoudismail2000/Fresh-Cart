import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _Router:Router){}

  isLoading:boolean=false
  errMsg:any=''
  

  loginForm:FormGroup=this._FormBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]]
  })

  handleForm():void
  {
    this.isLoading=true
    let userInfo:any=this.loginForm.value 
    this._AuthService.login(userInfo).subscribe({
      next:(response)=>{
        this.isLoading=false
        localStorage.setItem('eToken',response.token) 
        this._AuthService.getUserInfo()
        this._Router.navigate(['/home']) 
        
      },
      error:(err)=>{
        this.isLoading=false
        this.errMsg=err.error.message
        

      }
    })

  }

 

  

}

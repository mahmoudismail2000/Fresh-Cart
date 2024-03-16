import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}

  isLoading:boolean=false

  errMsg:any=''


  registerFrom:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:this.confirmPassword} as FormControlOptions)

  confirmPassword(group:FormGroup):void
  {
    let password=group.get('password')
    let rePassword=group.get('rePassword')

    if(rePassword?.value==''||rePassword?.value==null){
      rePassword?.setErrors({required:true})

    }else if(password?.value!=rePassword?.value){
      rePassword?.setErrors({mismatch:true})

    }

  }

  handleForm():void
  {
    this.isLoading=true
    let userInfo:any=this.registerFrom.value
    this._AuthService.register(userInfo).subscribe({
      next:(response)=>{
        this.isLoading=false
        this._Router.navigate(['/login'])
        console.log(response);
        
      },
      error:(err)=>{
        this.isLoading=false
        console.log(err.error.message);
        this.errMsg=err.error.message
        
        
      }
    })

  }



}

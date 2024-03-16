import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(
    private _AuthService:AuthService,
    private _FormBuilder:FormBuilder,
    private _Router:Router,
    private _ToastrService:ToastrService
    ){}
 
  failedMassage:string=''  
  isLoading:boolean=false

  passwordChangeForm:FormGroup=new FormGroup({
    currentPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword:new FormControl('')
  },{validators:this.confirmPassword} as FormControlOptions)

  userPasswordChange():void
  {
    this.isLoading=true
    
    if(this.passwordChangeForm.valid){
      this._AuthService.changePassword(this.passwordChangeForm.value).subscribe({
        next:(response)=>{
          console.log(response);
          
          if(response.message=='success'){
            localStorage.setItem('eToken',response.token)
            this.passwordChangeForm.reset()
            this._Router.navigate(['/home'])
            this._ToastrService.success(response.message)
            this.isLoading=false
            
          }
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          this.failedMassage=err.error.errors.msg
          this.isLoading=false
        }
      })
    }
  }

  confirmPassword(group:FormGroup){
    let password=group.get('password')
    let rePassword=group.get('rePassword')

    if(rePassword?.value==''||rePassword?.value==null){
      rePassword?.setErrors({required:true})

    }else if(rePassword.value!=password?.value){
      rePassword.setErrors({msgConfirm:true})

    }

  }

}

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgotPAsswordService } from 'src/app/core/services/forgot-password.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private _ForgotPAsswordService:ForgotPAsswordService,private _Router:Router,private _Renderer2:Renderer2){}

  isForgot:boolean=true
  isResetCode:boolean=false
  isResetPassword:boolean=false
  msgSuccessForgot:string=''
  msgSuccessResetCode:string=''
  msgSuccessResetPassword:string=''
  resetCodeFromEmail:string=''
  emailOfUser:string=''


  forgotPasswordForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
  resetCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl('',[Validators.required])
  })
  resetPasswordForm:FormGroup=new FormGroup({
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)])
  })


  forgotPassword(){
    this.emailOfUser=this.forgotPasswordForm.value.email
    
    this._ForgotPAsswordService.forgotPassword(this.forgotPasswordForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.statusMsg=='success'){
          this.isForgot=false
          this.isResetCode=true
        }
        

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgSuccessForgot=err.error.message
        

      }
    })

  }

  resetCode(txt1:any,txt2:any,txt3:any,txt4:any,txt5:any,txt6:any){
    
    let resetFormNew:any=this.resetCodeForm.value
    resetFormNew.resetCode=txt1.value+txt2.value+txt3.value+txt4.value+txt5.value+txt6.value //{resetCode:'356255'}
    console.log(resetFormNew);
    this._ForgotPAsswordService.verifyResetCode(resetFormNew).subscribe({
      next:(response)=>{
        console.log(response);
        
        
        if(response.status=='Success'){
          console.log(response);
          this.isResetCode=false
          this.isResetPassword=true

        }
        
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgSuccessResetCode=err.error.message
        
      }
    })
  }

  resetPassword()
  {
    let resetPassword:any=this.resetPasswordForm.value
    resetPassword.email=this.emailOfUser
    console.log(resetPassword);
    
    this._ForgotPAsswordService.updateResetPassword(resetPassword).subscribe({
      next:(response)=>{
        if(response.token!=null){
          localStorage.setItem('eToken',response.token)
          this._Router.navigate(['/home'])

        }
        
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgSuccessResetCode=err.error.message
        
      }
    })

  }

  

  keyCode(eventInfo:any,element:any){
    if(eventInfo.target.value.length==1){
      element.focus() 
    }
  }



 

}

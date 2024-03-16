import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user-data',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.scss']
})
export class UpdateUserDataComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService,private _Router:Router,private _ToastrService:ToastrService){}

  userDataUpdateForm:FormGroup=this._FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
  })

  failedMassage:string=''
  isLoading:boolean=false

  userDataUpdate():void
  {
    
    this.isLoading=true
    
    this._AuthService.updateUserData(this.userDataUpdateForm.value).subscribe({
      next:(response)=>{
      
        if(response.message=='success'){
          this._Router.navigate(['/home'])
          this._ToastrService.success(response.message)
          this.isLoading=false

        }
      },
      error:(err:HttpErrorResponse)=>{
      
        this.failedMassage=err.error.errors.msg
        this.isLoading=false
        

      }
    })

  }

}

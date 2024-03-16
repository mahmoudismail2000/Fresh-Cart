import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckOutService } from 'src/app/core/services/check-out.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  constructor(private _FormBuilder:FormBuilder,private _CheckOutService:CheckOutService,private _ActivatedRoute:ActivatedRoute){}

  msgCheckOut:boolean=false
  isLoading:boolean=false

  userDataInPaymentForm:FormGroup=this._FormBuilder.group({
    details:['',[Validators.required,Validators.minLength(5)]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city:['',Validators.required]
  })
  userId:any=''
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.userId=params.get('id')
        console.log(this.userId);
        
      }
    })
    
  }

  checkOutInPayment():void
  {
    this.isLoading=true
    
    if(this.userDataInPaymentForm.valid){
      this._CheckOutService.checkOut(this.userId,this.userDataInPaymentForm.value).subscribe({
        next:(response)=>{
          if(response.status=='success'){
            window.open(response.session.url,'_self')
            this.msgCheckOut=false
            this.isLoading=false
          }
        },
        error:(err)=>{
          console.log(err);
          this.isLoading=false
        }
      })
    }else{
      this.userDataInPaymentForm.markAllAsTouched()
      this.msgCheckOut=true
      this.isLoading=false


    }


  }

}

"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[177],{5177:(q,_,s)=>{s.r(_),s.d(_,{PaymentComponent:()=>A});var c=s(6814),o=s(95),t=s(4769),g=s(8987),d=s(1120);function f(e,i){1&e&&(t.TgZ(0,"p",18),t._uU(1,"Your Details Required"),t.qZA())}function h(e,i){1&e&&(t.TgZ(0,"p",18),t._uU(1,"Your Details Min Length 5 char"),t.qZA())}function y(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,f,2,0,"p",17),t.YNc(2,h,2,0,"p",17),t.qZA()),2&e){const a=t.oxw();let r,n;t.xp6(1),t.Q6J("ngIf",null==(r=a.userDataInPaymentForm.get("details"))?null:r.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(n=a.userDataInPaymentForm.get("details"))?null:n.getError("minlength"))}}function I(e,i){1&e&&(t.TgZ(0,"p",18),t._uU(1,"Your Phone Required"),t.qZA())}function P(e,i){1&e&&(t.TgZ(0,"p",18),t._uU(1,"Accept Only Egypt Phone Numbers"),t.qZA())}function v(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,I,2,0,"p",17),t.YNc(2,P,2,0,"p",17),t.qZA()),2&e){const a=t.oxw();let r,n;t.xp6(1),t.Q6J("ngIf",null==(r=a.userDataInPaymentForm.get("phone"))?null:r.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(n=a.userDataInPaymentForm.get("phone"))?null:n.getError("pattern"))}}function Z(e,i){1&e&&(t.TgZ(0,"p",18),t._uU(1,"Your city Required"),t.qZA())}function C(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,Z,2,0,"p",17),t.qZA()),2&e){const a=t.oxw();let r;t.xp6(1),t.Q6J("ngIf",null==(r=a.userDataInPaymentForm.get("city"))?null:r.getError("required"))}}function T(e,i){1&e&&t._UZ(0,"i",19)}function D(e,i){1&e&&(t.TgZ(0,"div",20)(1,"p",21),t._uU(2,"Your Data Not Correct"),t.qZA()())}let A=(()=>{class e{constructor(a,r,n){this._FormBuilder=a,this._CheckOutService=r,this._ActivatedRoute=n,this.msgCheckOut=!1,this.isLoading=!1,this.userDataInPaymentForm=this._FormBuilder.group({details:["",[o.kI.required,o.kI.minLength(5)]],phone:["",[o.kI.required,o.kI.pattern(/^01[0125][0-9]{8}$/)]],city:["",o.kI.required]}),this.userId=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{this.userId=a.get("id"),console.log(this.userId)}})}checkOutInPayment(){this.isLoading=!0,this.userDataInPaymentForm.valid?this._CheckOutService.checkOut(this.userId,this.userDataInPaymentForm.value).subscribe({next:a=>{"success"==a.status&&(window.open(a.session.url,"_self"),this.msgCheckOut=!1,this.isLoading=!1)},error:a=>{console.log(a),this.isLoading=!1}}):(this.userDataInPaymentForm.markAllAsTouched(),this.msgCheckOut=!0,this.isLoading=!1)}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(o.qu),t.Y36(g.g),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment"]],standalone:!0,features:[t.jDz],decls:26,vars:7,consts:[[1,"my-5","w-75","mx-auto"],[1,"p-4","shadow","bg-main-light","rounded-3",3,"formGroup","ngSubmit"],["for","details"],["type","text","id","details","formControlName","details",1,"form-control"],["detailsInput",""],["class","alert alert-danger mt-2 w-50 mx-auto text-center",4,"ngIf"],[1,"my-3"],["for","phone"],["type","tel","id","phone","formControlName","phone",1,"form-control"],["phoneInput",""],["for","city"],["type","text","id","city","formControlName","city",1,"form-control"],["cityInput",""],[1,"btn-main","my-3",3,"disabled"],["class","fas fa-spinner fa-spin my-auto me-3",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger","mt-2","w-50","mx-auto","text-center"],["class","p-0 m-0",4,"ngIf"],[1,"p-0","m-0"],[1,"fas","fa-spinner","fa-spin","my-auto","me-3"],[1,"alert","alert-danger"],[1,"mb-0","text-center"]],template:function(r,n){if(1&r&&(t.TgZ(0,"section",0)(1,"form",1),t.NdJ("ngSubmit",function(){return n.checkOutInPayment()}),t.TgZ(2,"h1"),t._uU(3,"CheckOut Session"),t.qZA(),t.TgZ(4,"div")(5,"label",2),t._uU(6,"Details"),t.qZA(),t._UZ(7,"input",3,4),t.YNc(9,y,3,2,"div",5),t.qZA(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12,"Phone"),t.qZA(),t._UZ(13,"input",8,9),t.YNc(15,v,3,2,"div",5),t.qZA(),t.TgZ(16,"div")(17,"label",10),t._uU(18,"City"),t.qZA(),t._UZ(19,"input",11,12),t.YNc(21,C,2,1,"div",5),t.qZA(),t.TgZ(22,"button",13),t.YNc(23,T,1,0,"i",14),t._uU(24," CheckOut "),t.qZA(),t.YNc(25,D,3,0,"div",15),t.qZA()()),2&r){const p=t.MAs(8),x=t.MAs(14),O=t.MAs(20);let l,u,m;t.xp6(1),t.Q6J("formGroup",n.userDataInPaymentForm),t.xp6(8),t.Q6J("ngIf",(null==(l=n.userDataInPaymentForm.get("details"))?null:l.errors)&&((null==(l=n.userDataInPaymentForm.get("details"))?null:l.touched)||p.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(u=n.userDataInPaymentForm.get("phone"))?null:u.errors)&&((null==(u=n.userDataInPaymentForm.get("phone"))?null:u.touched)||x.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(m=n.userDataInPaymentForm.get("city"))?null:m.errors)&&((null==(m=n.userDataInPaymentForm.get("city"))?null:m.touched)||O.value.length>0)),t.xp6(1),t.Q6J("disabled",null!=n.userDataInPaymentForm.errors),t.xp6(1),t.Q6J("ngIf",n.isLoading),t.xp6(2),t.Q6J("ngIf",n.msgCheckOut)}},dependencies:[c.ez,c.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]})}return e})()}}]);
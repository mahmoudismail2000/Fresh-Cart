"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[848],{848:(h,d,r)=>{r.r(d),r.d(d,{AllordersComponent:()=>O});var c=r(6814),_=r(1409),t=r(4769),p=r(6286),o=r(8806),v=r(8987),n=r(9410);function l(s,a){if(1&s&&(t.TgZ(0,"div",10)(1,"div",11)(2,"div",12)(3,"div"),t._UZ(4,"img",13),t.qZA()(),t.TgZ(5,"div",14)(6,"div",15)(7,"h5",16),t._uU(8),t.ALo(9,"cutText"),t.qZA(),t.TgZ(10,"div",17)(11,"span"),t._uU(12,"Count : "),t.TgZ(13,"span"),t._uU(14),t.qZA()(),t.TgZ(15,"span"),t._uU(16,"Price : "),t.TgZ(17,"span"),t._uU(18),t.ALo(19,"currency"),t.qZA()()()()()()()),2&s){const e=a.$implicit;t.xp6(4),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(t.xi3(9,5,e.product.title,3)),t.xp6(6),t.Oqu(e.count),t.xp6(4),t.Oqu(t.xi3(19,8,e.price,"e\xa3"))}}const g=function(s,a){return{"bg-success":s,"bg-danger":a}};function m(s,a){if(1&s&&(t.TgZ(0,"div",4)(1,"span",5),t._uU(2),t.qZA(),t.YNc(3,l,20,11,"div",6),t.TgZ(4,"div",7)(5,"div",8)(6,"p"),t._uU(7,"Is Delivered : "),t.TgZ(8,"span",9),t._uU(9),t.qZA()(),t.TgZ(10,"p"),t._uU(11,"Is Paid : "),t.TgZ(12,"span",9),t._uU(13),t.qZA()(),t.TgZ(14,"p"),t._uU(15,"Payment Method Type : "),t.TgZ(16,"span"),t._uU(17),t.qZA()(),t.TgZ(18,"p"),t._uU(19,"Total Order Price : "),t.TgZ(20,"span"),t._uU(21),t.qZA()()()()()),2&s){const e=a.$implicit,i=a.index;t.xp6(2),t.hij("Order : ",i+1,""),t.xp6(1),t.Q6J("ngForOf",e.cartItems),t.xp6(5),t.Q6J("ngClass",t.WLB(8,g,e.isDelivered,!e.isDelivered)),t.xp6(1),t.Oqu(e.isDelivered?"Yes":"No"),t.xp6(3),t.Q6J("ngClass",t.WLB(11,g,e.isPaid,!e.isPaid)),t.xp6(1),t.Oqu(e.isPaid?"Yes":"No"),t.xp6(4),t.Oqu(e.paymentMethodType),t.xp6(4),t.Oqu(e.totalOrderPrice)}}let O=(()=>{class s{constructor(e,i,u,C){this._CartService=e,this._WishListService=i,this._CheckOutService=u,this._AuthService=C,this.userId="",this.allOrders=[]}ngOnInit(){this._AuthService.getUserInfo(),this.userId=this._AuthService.userData.id,this._CheckOutService.getAllUserOrders(this.userId).subscribe({next:e=>{this.allOrders=e},error:e=>{console.log(e)}}),this._CartService.getUserCart().subscribe({next:e=>{this._CartService.countProductsInCart.next(e.numOfCartItems)},error:e=>{console.log(e)}}),this._WishListService.getUserWishlist().subscribe({next:e=>{this._WishListService.countOfProductsInWishlist.next(e.count)},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(p.N),t.Y36(o.i),t.Y36(v.g),t.Y36(n.e))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-allorders"]],standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[[1,"w-75","mx-auto","ordersSection","bg-main-light","rounded-4"],[1,"text-center","pt-4"],[1,"badge","bg-info"],["class","row d-flex align-content-center shadow-lg my-4 rounded-3 border border-success py-4",4,"ngFor","ngForOf"],[1,"row","d-flex","align-content-center","shadow-lg","my-4","rounded-3","border","border-success","py-4"],[1,"mb-2","fw-bold"],["class","col-md-8",4,"ngFor","ngForOf"],[1,"col-md-4","d-flex","justify-content-center","align-content-center"],[1,"p-4","rounded-4","shadow-lg"],[1,"falseDel",3,"ngClass"],[1,"col-md-8"],[1,"row","d-flex","align-items-center"],[1,"col-md-2"],["height","100",1,"w-100",3,"src","alt"],[1,"col-md-10"],[1,"d-flex","justify-content-between"],[1,"text-main"],[1,"d-flex","flex-column"]],template:function(i,u){1&i&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"All Orders "),t.TgZ(3,"span",2),t._uU(4),t.qZA()(),t.YNc(5,m,22,14,"div",3),t.qZA()),2&i&&(t.xp6(4),t.Oqu(u.allOrders.length),t.xp6(1),t.Q6J("ngForOf",u.allOrders))},dependencies:[c.ez,c.mk,c.sg,c.H9,_.Q],styles:[".ordersSection[_ngcontent-%COMP%]{height:100vh;overflow-y:scroll;padding:0 50px;margin-top:50px;margin-bottom:50px}p[_ngcontent-%COMP%]{margin-bottom:0!important}.falseDel[_ngcontent-%COMP%]{padding:2px 6px;color:#fff;font-weight:700;border-radius:5px}.proHeight[_ngcontent-%COMP%]{height:150px}"]})}return s})()},6286:(h,d,r)=>{r.d(d,{N:()=>p});var c=r(5619),_=r(4769),t=r(9862);let p=(()=>{class o{constructor(n){this._HttpClient=n,this.countProductsInCart=new c.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addProductToCart(n){return this._HttpClient.post(this.baseUrl+"cart",{productId:n})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeProductFromCart(n){return this._HttpClient.delete(this.baseUrl+`cart/${n}`)}updateCartProductQuantity(n,l){return this._HttpClient.put(this.baseUrl+`cart/${n}`,{count:l})}clearAllProductInCart(){return this._HttpClient.delete(this.baseUrl+"cart")}static#t=this.\u0275fac=function(l){return new(l||o)(_.LFG(t.eN))};static#e=this.\u0275prov=_.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);
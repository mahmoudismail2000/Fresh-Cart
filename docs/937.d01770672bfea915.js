"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[937],{937:(h,a,r)=>{r.r(a),r.d(a,{CategoriesComponent:()=>i});var n=r(6814),t=r(4769),_=r(5884),l=r(8806),o=r(6286);function C(s,d){if(1&s&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h4",6),t._uU(4),t.qZA()()()),2&s){const e=d.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH)("alt",e.name),t.xp6(2),t.Oqu(e.name)}}let i=(()=>{class s{constructor(e,c,u){this._CategoriesService=e,this._WishListService=c,this._CartService=u,this.allCategories=[]}ngOnInit(){this._CategoriesService.getAllCategories().subscribe({next:e=>{this.allCategories=e.data},error:e=>{console.log(e)}}),this._CartService.getUserCart().subscribe({next:e=>{this._CartService.countProductsInCart.next(e.numOfCartItems)},error:e=>{console.log(e)}}),this._WishListService.getUserWishlist().subscribe({next:e=>{this._WishListService.countOfProductsInWishlist.next(e.count)},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(c){return new(c||s)(t.Y36(_.G),t.Y36(l.i),t.Y36(o.N))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5"],[1,"row","gy-4","d-flex","justify-content-center"],["class","col-md-3","role","button",4,"ngFor","ngForOf"],["role","button",1,"col-md-3"],[1,"shadow","p-2","border","border-success","rounded-3"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main"]],template:function(c,u){1&c&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,C,5,3,"div",2),t.qZA()()),2&c&&(t.xp6(2),t.Q6J("ngForOf",u.allCategories))},dependencies:[n.ez,n.sg]})}return s})()},6286:(h,a,r)=>{r.d(a,{N:()=>l});var n=r(5619),t=r(4769),_=r(9862);let l=(()=>{class o{constructor(i){this._HttpClient=i,this.countProductsInCart=new n.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addProductToCart(i){return this._HttpClient.post(this.baseUrl+"cart",{productId:i})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeProductFromCart(i){return this._HttpClient.delete(this.baseUrl+`cart/${i}`)}updateCartProductQuantity(i,s){return this._HttpClient.put(this.baseUrl+`cart/${i}`,{count:s})}clearAllProductInCart(){return this._HttpClient.delete(this.baseUrl+"cart")}static#t=this.\u0275fac=function(s){return new(s||o)(t.LFG(_.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);
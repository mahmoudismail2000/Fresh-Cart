"use strict";(self.webpackChunkfresh_cart=self.webpackChunkfresh_cart||[]).push([[812],{812:(m,a,e)=>{e.r(a),e.d(a,{BrandsComponent:()=>c});var l=e(6814),t=e(4769),d=e(9862);let u=(()=>{class s{constructor(r){this._HttpClient=r}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}static#t=this.\u0275fac=function(o){return new(o||s)(t.LFG(d.eN))};static#r=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var i=e(8806),p=e(6286);function n(s,v){if(1&s&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&s){const r=v.$implicit;t.xp6(2),t.Q6J("src",r.image,t.LSH)("alt",r.image),t.xp6(2),t.Oqu(r.name)}}let c=(()=>{class s{constructor(r,o,h){this._BrandsService=r,this._WishListService=o,this._CartService=h,this.allBrands=[]}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:r=>{this.allBrands=r.data},error:r=>{console.log(r)}}),this._CartService.getUserCart().subscribe({next:r=>{this._CartService.countProductsInCart.next(r.numOfCartItems)},error:r=>{console.log(r)}}),this._WishListService.getUserWishlist().subscribe({next:r=>{this._WishListService.countOfProductsInWishlist.next(r.count)},error:r=>{console.log(r)}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(u),t.Y36(i.i),t.Y36(p.N))};static#r=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5"],[1,"row","gy-4"],["class","col-ms-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-ms-6","col-md-4","col-lg-3"],[1,"shadow","border","border-success","p-2","rounded-3"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main","fw-bold"]],template:function(o,h){1&o&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,n,5,3,"div",2),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngForOf",h.allBrands))},dependencies:[l.ez,l.sg]})}return s})()},6286:(m,a,e)=>{e.d(a,{N:()=>u});var l=e(5619),t=e(4769),d=e(9862);let u=(()=>{class i{constructor(n){this._HttpClient=n,this.countProductsInCart=new l.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}addProductToCart(n){return this._HttpClient.post(this.baseUrl+"cart",{productId:n})}getUserCart(){return this._HttpClient.get(this.baseUrl+"cart")}removeProductFromCart(n){return this._HttpClient.delete(this.baseUrl+`cart/${n}`)}updateCartProductQuantity(n,c){return this._HttpClient.put(this.baseUrl+`cart/${n}`,{count:c})}clearAllProductInCart(){return this._HttpClient.delete(this.baseUrl+"cart")}static#t=this.\u0275fac=function(c){return new(c||i)(t.LFG(d.eN))};static#r=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);
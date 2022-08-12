import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:any = [];
  item:any = {};
  index:any;
  totalCart = new Subject()

  constructor() { 
    //Kiem tra trong localstorage co index?

  let listCart:any =  localStorage.getItem('cart')
  this.items = listCart ? JSON.parse(listCart) : [];
  
  }
  add(product:any):void{
    let index =  this.items.findIndex((item:any)=>{
      return item.id == product.id
    })
    if(index >-1){
      this.items[index].quantity += 1;  
      localStorage.setItem('cart',JSON.stringify(this.items))

    }else{
      this.item.id = product.id;
      this.item.name =product.name;
      this.item.img = product.img;
      this.item.price = product.price;
      this.item.quantity = 1;
      this.items.push(this.item)
      localStorage.setItem('cart',JSON.stringify(this.items))
    }
    this.totalCart.next(this.items.length);
   
  }
  deleteIt(id:any):void{
   for (let i = 0; i < this.items.length; ++i) {
    if(this.items[i]===id){
      this.index=i;
    }   
  }
  this.items.splice(this.index,1);
   
   localStorage.setItem('cart',JSON.stringify(this.items))
  }
  deleteProduct(product:any):void{
    localStorage.clear();
    localStorage.setItem('cart',JSON.stringify(this.items))
  }
  getList():void{
    localStorage.getItem('cart')
  }
}

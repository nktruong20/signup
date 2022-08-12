import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  
  listCart:any = [];
  contactData:any;
  check:any;
  deleteCart:any;
  cart:any; 
  quantity:any;
  totalPrice:number = 0;

  dateBuy: any;
  billingCheckbox: boolean = false;
  
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z_.][a-zA-Z0-9]{0,10}@[a-z0-9]{4,10}\.[a-z]{2,5}$')
    ]),
    password: new FormControl('', [
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0][1-9]{9}$'),
    ]),
    cart: new FormControl([]),
  })
  constructor(private cartService:CartService,private act:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.items;
    this.check = localStorage.getItem('loginForm')
    if(this.check){
      this.contactData = JSON.parse(this.check)
    }
    this.cart = this.cartService.items.length;
    this.cartService.totalCart.subscribe((data)=>{
        this.cart = data;
    })
    this.doTotalPrice();
    document.documentElement.scrollTop = 0;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
    let year = date.getFullYear();
    this.dateBuy = `${day}/${month}/${year}`;
    
  }
  get form(): any {
    return this.formGroup.controls;
  }
  checkBilling() {
    if (this.billingCheckbox) {
      this.billingCheckbox = false;
    } else {
      this.billingCheckbox = true;
    }
  }
  logout(){
    localStorage.removeItem('loginForm')
    localStorage.removeItem('cart')
  }
  doTotalPrice(){
    let total = 0;
    this.cartService.items.forEach((item: {price :number ,quantity:number})=>{
      // item.quantity  = 1;
      total+= item.price * item.quantity;
    });
    this.totalPrice = total;
  }
 
  register():void{
    Swal.fire('Đặt hàng thành công !!!')
  }
  deleteIt(id:any):void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.deleteCart = this.cartService.deleteIt(id)
        window.location.reload();
        // this.cartService.getList();
      }
    })
  
  }
}

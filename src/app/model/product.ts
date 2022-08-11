import { Injectable } from '@angular/core';
// import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class Product {
    id?:number;
    name?:any;
    category_id?:number;
    price?:number;
    salePrecent?:number;
    newness?:number;
    img?:any;
    allImg?:any;
    instock?:boolean;
    purchases?:number;
    description?:any;
}

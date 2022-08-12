import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
const urlAPI = "./assets/data/category.json"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  find(id:number):Observable<Product>{
    return this.http.get<Product>(`${urlAPI}?id=${id}`)
  }
  getFilterList(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(`${urlAPI}?category_id=${id}`)
  }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(`${urlAPI}`)
  }
  editItem(id:number, data:Product):Observable<Product>{
    return this.http.put<Product>(`${urlAPI}?category_id=${id}`,data);
  }
}

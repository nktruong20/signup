import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
const urlAPI = "http://localhost:3000/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  find(id:number):Observable<Product>{
    return this.http.get<Product>(`${urlAPI}/${id}`)
  }
}

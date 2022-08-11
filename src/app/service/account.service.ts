import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const urlAPI = "http://localhost:3000/signupForm"

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<any>(urlAPI)
  }
}
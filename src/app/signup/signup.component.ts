import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isBool = true;
  formInfo = new FormGroup({
    fullName:new FormControl('',
    [Validators.required]),
    phone:new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
      // Validators.email
    ]),
    password:new FormControl('',[
      Validators.required
    ]),
  })

  constructor(private http:HttpClient,private accService:AccountService,private route:Router) { }

  ngOnInit(): void {
  }
  get form():any{
    return this.formInfo.controls;
  }
  signUp():void{
    this.http.post<any>(" http://localhost:3000/signupForm",this.formInfo.value).subscribe((data)=>{
      this.formInfo.reset();
      this.route.navigate(['login'])
    })
  }
  showpass():void{
    if(this.isBool){
      document.getElementById('password')?.setAttribute("type","text")
      this.isBool = false
    }else{
      document.getElementById('password')?.setAttribute("type","password")
      this.isBool = true;
    }

  }

}

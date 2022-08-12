import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'carts',component:CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

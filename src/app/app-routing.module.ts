import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { EggComponent } from './egg/egg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindusComponent } from './findus/findus.component';
import { Whyfarm2cookComponent } from './whyfarm2cook/whyfarm2cook.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'findus', component: FindusComponent },
  { path: 'whyfarm2cook', component: Whyfarm2cookComponent },
  { path: 'chicken', component: ChickenComponent },
  { path: 'mutton', component: MuttonComponent },
  { path: 'egg', component: EggComponent },
  { path: 'single', component: SingleComponent },
  { path: 'checkout', component: CheckoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

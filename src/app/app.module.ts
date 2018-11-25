import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Footer1Component } from './footer1/footer1.component';
import { Header1Component } from './header1/header1.component';
import { LoginComponent } from './login/login.component';
import { SingleComponent } from './single/single.component';
import { MuttonComponent } from './mutton/mutton.component';
import { ChickenComponent } from './chicken/chicken.component';
import { EggComponent } from './egg/egg.component';
import { FindusComponent } from './findus/findus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { Whyfarm2cookComponent } from './whyfarm2cook/whyfarm2cook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Footer1Component,
    Header1Component,
    LoginComponent,
    SingleComponent,
    MuttonComponent,
    ChickenComponent,
    EggComponent,
    FindusComponent,
    CheckoutComponent,
    RegisterComponent,
    Whyfarm2cookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

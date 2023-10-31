import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInitialComponent } from './Components/LoginComponent/login-initial.component';

import { InputTextModule } from 'primeng/inputtext';
import { BodyLoginComponent } from './Components/BodyLogin/body-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginInitialComponent,
    BodyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent, LoginInitialComponent]
})
export class AppModule { }

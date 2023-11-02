import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInitialComponent } from './Components/LoginComponent/login-initial.component';

import { InputTextModule } from 'primeng/inputtext';
import { BodyLoginComponent } from './Components/BodyLogin/body-login.component';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginInitialComponent,
    BodyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent, LoginInitialComponent]
})
export class AppModule { }

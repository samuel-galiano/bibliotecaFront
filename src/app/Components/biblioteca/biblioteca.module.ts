import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInitialComponent } from './LoginComponent/login-initial.component';
import { BodyLoginComponent } from './BodyLogin/body-login.component';
import { FormsModule } from '@angular/forms';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';


@NgModule({
  declarations: [
    LoginInitialComponent,
    BodyLoginComponent,
    MenuInicialComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    LoginInitialComponent,
    BodyLoginComponent,
    MenuInicialComponent
  ]
})
export class BibliotecaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInitialComponent } from './LoginComponent/login-initial.component';
import { BodyLoginComponent } from './BodyLogin/body-login.component';
import { FormsModule } from '@angular/forms';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from 'primeng/dialog';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    LoginInitialComponent,
    BodyLoginComponent,
    MenuInicialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    PanelMenuModule,
    DialogModule,
    MegaMenuModule
  ],
  exports: [
    LoginInitialComponent,
    BodyLoginComponent,
    MenuInicialComponent
  ]
})
export class BibliotecaModule { }

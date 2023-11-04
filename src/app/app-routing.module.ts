import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './Components/biblioteca/menu-inicial/menu-inicial.component';
import { LoginInitialComponent } from './Components/biblioteca/LoginComponent/login-initial.component';

const routes: Routes = [
  {path: '', component: LoginInitialComponent},
  {path: 'menu-inicial', component: MenuInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './Components/biblioteca/menu-inicial/menu-inicial.component';
import { LoginInitialComponent } from './Components/biblioteca/LoginComponent/login-initial.component';
import { CustomAuthGuard } from './shared/auth-guard/auth-guard';
import { TabelaAutoresComponent } from './Components/tabela-autores/tabela-autores.component';

const routes: Routes = [
  {path: '', component: LoginInitialComponent},
  {path: 'menu-inicial', component: MenuInicialComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-autores', component: TabelaAutoresComponent, canActivate: [CustomAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

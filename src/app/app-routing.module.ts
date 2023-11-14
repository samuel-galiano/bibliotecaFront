import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicialComponent } from './Components/biblioteca/menu-inicial/menu-inicial.component';
import { LoginInitialComponent } from './Components/biblioteca/LoginComponent/login-initial.component';
import { CustomAuthGuard } from './shared/auth-guard/auth-guard';
import { TabelaAutoresComponent } from './Components/tabela-autores/tabela-autores.component';
import { TabelaEditorasComponent } from './Components/tabela-editoras/tabela-editoras.component';
import { TabelaGenerosComponent } from './Components/tabela-generos/tabela-generos.component';
import { TabelaPessoasComponent } from './Components/tabela-pessoas/tabela-pessoas.component';
import { TabelaLivrosComponent } from './Components/tabela-livros/tabela-livros.component';
import { LivrosPorAutorEGeneroComponent } from './Components/livros-por-autor-e-genero/livros-por-autor-e-genero.component';
import { TabelaTransacaoComponent } from './Components/tabela-transacao/tabela-transacao.component';
import { TabelaVendasComponent } from './Components/tabela-vendas/tabela-vendas.component';

const routes: Routes = [
  {path: '', component: LoginInitialComponent},
  {path: 'menu-inicial', component: MenuInicialComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-autores', component: TabelaAutoresComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-editoras', component: TabelaEditorasComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-generos', component: TabelaGenerosComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-pessoas', component: TabelaPessoasComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-livros', component: TabelaLivrosComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-livros-por-autor-e-genero', component: LivrosPorAutorEGeneroComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-transacoes', component: TabelaTransacaoComponent, canActivate: [CustomAuthGuard]},
  {path: 'tabela-vendas', component: TabelaVendasComponent, canActivate: [CustomAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

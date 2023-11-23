import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TabelaAutoresComponent } from './Components/tabela-autores/tabela-autores.component';
import { TabelaEditorasComponent } from './Components/tabela-editoras/tabela-editoras.component';
import { TabelaGenerosComponent } from './Components/tabela-generos/tabela-generos.component';
import { TabelaPessoasComponent } from './Components/tabela-pessoas/tabela-pessoas.component';
import { TabelaLivrosComponent } from './Components/tabela-livros/tabela-livros.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LivrosPorAutorEGeneroComponent } from './Components/livros-por-autor-e-genero/livros-por-autor-e-genero.component';
import { TabelaTransacaoComponent } from './Components/tabela-transacao/tabela-transacao.component';
import { TabelaVendasComponent } from './Components/tabela-vendas/tabela-vendas.component';
import { TabelaVendasPorMesComponent } from './Components/tabela-vendas-por-mes/tabela-vendas-por-mes.component';
import { LoginInitialComponent } from './Components/biblioteca/LoginComponent/login-initial.component';
import { BodyLoginComponent } from './Components/biblioteca/BodyLogin/body-login.component';
import { MenuInicialComponent } from './Components/biblioteca/menu-inicial/menu-inicial.component';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent,
    TabelaAutoresComponent,
    TabelaEditorasComponent,
    TabelaGenerosComponent,
    TabelaPessoasComponent,
    TabelaLivrosComponent,
    LivrosPorAutorEGeneroComponent,
    TabelaTransacaoComponent,
    TabelaVendasComponent,
    TabelaVendasPorMesComponent,
    LoginInitialComponent,
    BodyLoginComponent,
    MenuInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    SelectButtonModule,
    FormsModule,
    ToastModule,
    PanelMenuModule,
    DialogModule,
    MegaMenuModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BibliotecaModule } from './Components/biblioteca/biblioteca.module';
import { TabelaAutoresComponent } from './Components/tabela-autores/tabela-autores.component';
import { TabelaEditorasComponent } from './Components/tabela-editoras/tabela-editoras.component';
import { TabelaGenerosComponent } from './Components/tabela-generos/tabela-generos.component';
import { TabelaPessoasComponent } from './Components/tabela-pessoas/tabela-pessoas.component';
import { TabelaLivrosComponent } from './Components/tabela-livros/tabela-livros.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [
    AppComponent,
    TabelaAutoresComponent,
    TabelaEditorasComponent,
    TabelaGenerosComponent,
    TabelaPessoasComponent,
    TabelaLivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    BibliotecaModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    SelectButtonModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

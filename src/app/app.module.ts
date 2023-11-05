import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BibliotecaModule } from './Components/biblioteca/biblioteca.module';
import { TabelaAutoresComponent } from './Components/tabela-autores/tabela-autores.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaAutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    BibliotecaModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

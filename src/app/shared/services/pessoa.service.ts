import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders  = new HttpHeaders({'Authorization': `Bearer ${this.token}`});

  constructor(private http: HttpClient) { }

  public listarPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(`${this.apiUrl}/pessoas`, {headers: this.headers})
  }

  public criarPessoa(formulario: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(`${this.apiUrl}/pessoas`, formulario, {headers: this.headers})
  }

  public apagarPessoa(pessoaId: Number): Observable<Pessoa>{
    return this.http.delete<Pessoa>(`${this.apiUrl}/pessoas/${pessoaId}`, {headers: this.headers})	
  }
}

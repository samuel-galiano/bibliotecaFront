import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/Livro';
import { LivroCount } from '../model/LivroCount';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this.token}`});
  
  constructor(private http: HttpClient) { }

  public listarLivros(): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.apiUrl}/livros`, {headers: this.headers})
  }

  public listarLivrosPorAutoreGenero(): Observable<LivroCount[]>{
    return this.http.get<LivroCount[]>(`${this.apiUrl}/livros/consulta-agrupamento`, {headers: this.headers})
  }

  public criarLivro(formulario: Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.apiUrl}/livros`, formulario, {headers: this.headers})
  }
}

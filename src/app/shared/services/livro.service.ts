import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/Livro';

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
}

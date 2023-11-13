import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editora } from '../model/Editora';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this.token}`});



  constructor(private http: HttpClient) { }

  public listarEditoras(): Observable<Editora[]>{
    return this.http.get<Editora[]>(`${this.apiUrl}/editoras`, {headers: this.headers})
  }

  public criarEditora(formulario: Editora): Observable<Editora>{
    return this.http.post<Editora>(`${this.apiUrl}/editoras`, formulario, {headers: this.headers})
  }
}

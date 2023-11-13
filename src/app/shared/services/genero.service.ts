import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../model/Genero';
import { Editora } from '../model/Editora';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this.token}`});


  constructor(private http: HttpClient) { }

  public listarGeneros(): Observable<Genero[]>{
    return this.http.get<Genero[]>(`${this.apiUrl}/generos`, {headers: this.headers})
  }

  public criarGenero(formulario: Genero): Observable<Editora>{
    return this.http.post<Genero>(`${this.apiUrl}/generos`, formulario, {headers: this.headers})
  }
}

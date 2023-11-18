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

  public criarGenero(formulario: Genero): Observable<Genero>{
    return this.http.post<Genero>(`${this.apiUrl}/generos`, formulario, {headers: this.headers})
  }

  public apagarGenero(generoId: Number): Observable<Genero>{
    return this.http.delete<Genero>(`${this.apiUrl}/generos/${generoId}`, {headers: this.headers})
  }

  public editarGenero(generoId: Number, formulario: Genero): Observable<Genero>{
    return this.http.put<Genero>(`${this.apiUrl}/generos/${generoId}`, formulario, {headers: this.headers})
  }
}

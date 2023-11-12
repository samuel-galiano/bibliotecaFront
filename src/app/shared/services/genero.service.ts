import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../model/Genero';

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
}

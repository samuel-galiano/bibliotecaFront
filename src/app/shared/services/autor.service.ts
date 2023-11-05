import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../model/Autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${this.token}`});


  constructor(private http: HttpClient) { }

  public listarAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(`${this.apiUrl}/autores`, { headers: this.headers });
  }
}

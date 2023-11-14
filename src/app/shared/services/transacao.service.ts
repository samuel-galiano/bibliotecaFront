import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from '../model/Transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders  = new HttpHeaders({'Authorization': `Bearer ${this.token}`});


  constructor(private http: HttpClient) { }

  public listarTransacoes(): Observable<Transacao[]>{
    return this.http.get<Transacao[]>(`${this.apiUrl}/transacoes`, {headers: this.headers})
  }
}

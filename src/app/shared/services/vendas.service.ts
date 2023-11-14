import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venda } from '../model/Venda';
import { VendaPorMes } from '../model/VendaPorMes';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private apiUrl = 'http://localhost:8080';

  private token = localStorage.getItem('token');

  headers: HttpHeaders  = new HttpHeaders({'Authorization': `Bearer ${this.token}`});

  constructor(private http: HttpClient) { }

  public listarVendas(): Observable<Venda[]>{
    return this.http.get<Venda[]>(`${this.apiUrl}/vendas`, {headers: this.headers})
  }

  public consultarVendasPorMes(): Observable<VendaPorMes[]>{
    return this.http.get<VendaPorMes[]>(`${this.apiUrl}/vendas/consulta-vendas-por-mes`, {headers: this.headers})
  }
}

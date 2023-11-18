import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { CriaUsuarioForm } from '../model/CriarUsuario.form';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public login(formulario: User): Observable<User>{
    
    return this.http.post<User>(`${this.apiUrl}/auth/login`, formulario);
  }

  public registar(formulario: CriaUsuarioForm): Observable<CriaUsuarioForm>{
    return this.http.post<CriaUsuarioForm>(`${this.apiUrl}/auth/register`, formulario);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public login(formulario: User): Observable<User>{
    
    return this.http.post<User>(`${this.apiUrl}/auth/login`, formulario);
  }
}

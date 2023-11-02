import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public login(login: string, password: string){
    const credenciais = {login, password};

    console.log(credenciais);

    return this.http.post(`${this.apiUrl}/auth/login`, credenciais);
  }
}

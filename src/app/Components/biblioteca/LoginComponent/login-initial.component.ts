import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { User } from 'src/app/shared/model/User';

  @Component({
    selector: 'app-login-initial',
    templateUrl: './login-initial.component.html',
    styleUrls: ['./login-initial.component.css']
  })
  export class LoginInitialComponent {
   
    public usuario: User = new User();

    constructor(private authService: AuthenticationService, private router: Router){}

    public login(): void{
      this.authService.login(this.usuario).subscribe(
        (data: User) => {
          if (data.token !== undefined) {
            localStorage.setItem('token', data.token);
            console.log("O Token do usuário é ", localStorage.getItem('token'));
            this.router.navigate(['/menu-inicial']);
          } else {
            console.log("Token não definido no objeto de resposta.");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }    
  }

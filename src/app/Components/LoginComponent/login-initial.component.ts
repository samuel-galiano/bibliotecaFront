  import { Component } from '@angular/core';
  import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';

  @Component({
    selector: 'app-login-initial',
    templateUrl: './login-initial.component.html',
    styleUrls: ['./login-initial.component.css']
  })
  export class LoginInitialComponent {
    email: string = '';
    senha: string = '';

    constructor(private authService: AuthenticationService){}

    login(){


      this.authService.login(this.email, this.senha)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/shared/authentication/authentication.service';
import { CriaUsuarioForm } from 'src/app/shared/model/CriarUsuario.form';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-login-initial',
  templateUrl: './login-initial.component.html',
  styleUrls: ['./login-initial.component.css'],
  providers: [MessageService],
})
export class LoginInitialComponent {
  public usuario: User = new User();

  public visibleDialogRegistrarUsuario: boolean = false;

  public usuarioQueSeraCriado: CriaUsuarioForm = new CriaUsuarioForm();

  public nomeDoUsuarioQueSeraCriado: string = '';

  public senhaDoUsuarioQueSeraCriado: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private messageService: MessageService
  ) {}

  public login(): void {
    this.authService.login(this.usuario).subscribe(
      (data: User) => {
        if (data.token !== undefined) {
          localStorage.setItem('token', data.token);
          console.log('O Token do usuário é ', localStorage.getItem('token'));
          this.router.navigate(['/menu-inicial']);
        } else {
          console.log('Token não definido no objeto de resposta.');
        }
      },
      (error) => {
        console.log(error);
        this.exibeMensagemCasoLoginInvalido();
      }
    );
  }

  public criaUsuario(): void{
    this.usuarioQueSeraCriado.login = this.nomeDoUsuarioQueSeraCriado;
    this.usuarioQueSeraCriado.password = this.senhaDoUsuarioQueSeraCriado;
    this.usuarioQueSeraCriado.role = 'ADMIN';
    this.authService.registar(this.usuarioQueSeraCriado).subscribe(() => {
      console.log('Deu certo');
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Usuário criado com sucesso!'
      })
    })
    this.visibleDialogRegistrarUsuario = false;
  }

  public exibeMensagemCasoLoginInvalido(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro ao fazer login',
      detail: 'Credenciais Invalídas',
    });
  }

  public abreDialogRegistrarUsuario(){
    this.visibleDialogRegistrarUsuario = true;
  }

  public fechaDialogRegistraUsuario(){
    this.visibleDialogRegistrarUsuario = false;
  }
}

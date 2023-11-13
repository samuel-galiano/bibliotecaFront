import { Component } from '@angular/core';
import { Autor } from 'src/app/shared/model/Autor';
import { AutorService } from 'src/app/shared/services/autor.service';

@Component({
  selector: 'app-tabela-autores',
  templateUrl: './tabela-autores.component.html',
  styleUrls: ['./tabela-autores.component.css']
})
export class TabelaAutoresComponent {

  constructor(private autorService: AutorService){}

  public autores: Autor[] = [];

  public visibleDialogEditarAutor: boolean = false;

  ngOnInit(): void {
    this.buscarInformacoesClientes();
    
  }

  public abrirDialogParaEditarAutor(){
    this.visibleDialogEditarAutor = true;
  }

  public buscarInformacoesClientes(): void {
    this.autorService.listarAutores().subscribe((dados: Autor[]) => {
      this.autores = dados;
      console.log(dados);
    });
  }
}

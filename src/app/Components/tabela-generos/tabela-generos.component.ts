import { Component } from '@angular/core';
import { Genero } from 'src/app/shared/model/Genero';
import { GeneroService } from 'src/app/shared/services/genero.service';

@Component({
  selector: 'app-tabela-generos',
  templateUrl: './tabela-generos.component.html',
  styleUrls: ['./tabela-generos.component.css']
})
export class TabelaGenerosComponent {

  constructor(private generoService: GeneroService){}

  public generos: Genero[] = [];

  ngOnInit(){
    this.buscarInformacoesGeneros();
  }

  public buscarInformacoesGeneros(){
    this.generoService.listarGeneros().subscribe((dados: Genero[]) => {
      this.generos = dados;
      console.log(dados);
    })
  }

}
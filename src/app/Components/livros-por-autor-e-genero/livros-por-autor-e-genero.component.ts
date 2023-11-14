import { Component } from '@angular/core';
import { LivroCount } from 'src/app/shared/model/LivroCount';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-livros-por-autor-e-genero',
  templateUrl: './livros-por-autor-e-genero.component.html',
  styleUrls: ['./livros-por-autor-e-genero.component.css']
})
export class LivrosPorAutorEGeneroComponent {

  constructor(private livroService: LivroService){}

  public livrosPorAutorEGenero: LivroCount[] = [];

  ngOnInit(){
    this.buscarLivrosPorAutorEGenero();
  }

  public buscarLivrosPorAutorEGenero(){
    this.livroService.listarLivrosPorAutoreGenero().subscribe((dados: LivroCount[]) => {
      this.livrosPorAutorEGenero = dados;
      console.log(dados);
    })
  }
}

import { Component } from '@angular/core';
import { Livro } from 'src/app/shared/model/Livro';
import { LivroService } from 'src/app/shared/services/livro.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrls: ['./tabela-livros.component.css']
})
export class TabelaLivrosComponent {

  constructor(private livroService: LivroService){}

  public livros: Livro[] = [];

  ngOnInit(){
    this.buscarInformacoesLivros();
  }


  public buscarInformacoesLivros(){
    this.livroService.listarLivros().subscribe((dados: Livro[]) => {
      this.livros = dados;
      console.log(this.livros);
    })
  }
}

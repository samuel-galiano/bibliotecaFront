import { Component } from '@angular/core';
import { Editora } from 'src/app/shared/model/Editora';
import { Genero } from 'src/app/shared/model/Genero';
import { Livro } from 'src/app/shared/model/Livro';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { EditoraService } from 'src/app/shared/services/editora.service';
import { GeneroService } from 'src/app/shared/services/genero.service';
import { LivroService } from 'src/app/shared/services/livro.service';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrls: ['./tabela-livros.component.css']
})
export class TabelaLivrosComponent {

  constructor(private livroService: LivroService, private editoraService: EditoraService, private generoService: GeneroService, private pessoaService: PessoaService){}

  public livros: Livro[] = [];

  public visibleDialogEditarLivro: boolean = false;

  public visibleDialogCriarLivro: boolean = false;

  public editoras: Editora[] = [];

  public editoraSelecionada: Editora = new Editora();

  public generos: Genero[] = [];

  public generoSelecionado: Genero = new Genero();

  public pessoas: Pessoa[] = [];

  public pessoaSelecionada: Pessoa = new Pessoa();

  stateOptions: any[] = [{label: 'Sim', value: 'sim'}, {label: 'Não', value: 'nao'}];

  value: string = 'off';

  ngOnInit(){
    this.buscarInformacoesLivros();
    this.buscarEditoras();
    this.buscarGeneros();
    this.buscarPessoas();
  }

  public abrirDialogParaEditarLivro(){
    this.visibleDialogEditarLivro = true;
  }

  public abrirDialogParaCriarLivro(){
    this.visibleDialogCriarLivro = true;
  }

  public fecharDialogParaCriarLivro(){
    this.visibleDialogCriarLivro = false;
  }


  public buscarInformacoesLivros(){
    this.livroService.listarLivros().subscribe((dados: Livro[]) => {
      this.livros = dados;
      console.log(this.livros);
    })
  }

  public buscarEditoras(){
    this.editoraService.listarEditoras().subscribe((dados: Editora[]) => {
      this.editoras = dados;
      console.log(dados);
    })
  }

  public buscarGeneros(){
    this.generoService.listarGeneros().subscribe((dados: Genero[]) => {
      this.generos = dados;
      console.log(dados);
    })
  }

  public buscarPessoas(){
    this.pessoaService.listarPessoas().subscribe((dados: Pessoa[]) => {
      this.pessoas = dados;
      console.log(dados);
    })
  }
}

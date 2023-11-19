import { Component } from '@angular/core';
import { Autor } from 'src/app/shared/model/Autor';
import { Editora } from 'src/app/shared/model/Editora';
import { EmprestaDevolveLivro } from 'src/app/shared/model/EmprestaDevolveLivro.form';
import { Genero } from 'src/app/shared/model/Genero';
import { Livro } from 'src/app/shared/model/Livro';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { AutorService } from 'src/app/shared/services/autor.service';
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

  constructor(private livroService: LivroService, private editoraService: EditoraService, private generoService: GeneroService, private pessoaService: PessoaService, private autorService: AutorService){}

  public livros: Livro[] = [];

  public visibleDialogEditarLivro: boolean = false;

  public visibleDialogCriarLivro: boolean = false;

  public visibleDialogEmprestarLivro: boolean = false;

  public visibleDialogDevolverLivro: boolean = false;

  public visibleDialogApagarLivro: boolean = false;

  public editoras: Editora[] = [];

  public editoraSelecionada: Editora = new Editora();

  public generos: Genero[] = [];

  public generoSelecionado: Genero = new Genero();

  public pessoas: Pessoa[] = [];

  public pessoaSelecionada: Pessoa = new Pessoa();

  public quantidadeEmprestada: Number | undefined;

  stateOptions: any[] = [{label: 'Sim', value: true}, {label: 'Não', value: false}];

  public dataDoUltimoEmprestimo: String = "";

  value: string = 'false';

  public formularioParaCriarNovoLivro: Livro = new Livro();

  public nomeDoLivro: String = "";

  public autores: Autor[] = [];

  public autorSelecionado: Autor = new Autor();

  public pessoaSelecionadaParaEmprestarLivro: Pessoa = new Pessoa();

  public formularioParaEmprestarLivro: EmprestaDevolveLivro = new EmprestaDevolveLivro();

  public livroSelecionadoParaEmprestar: Livro = new Livro();

  public livroSelecionadoParaDevolver: Livro = new Livro();

  public livroSelecionadoParaApagar: Livro = new Livro();

  public livroSelecionadoParaEditar: Livro = new Livro();

  public nomeDoLivroSelecionadoParaEditar: string = "";

  public nomeDaEditoraDoLivroSelecionadoParaEditar: Editora = new Editora();

  public generoDoLivroSelecionadoParaEditar: Genero = new Genero(); 

  public autorDoLivroSelecionadoParaEditar: Autor = new Autor();

  public pessoaDoLivroSelecionadoParaEditar: Pessoa  = new Pessoa();

  public quantidadeEmprestadaDoLivroSelecionadoParaEditar: Number | undefined;

  public dataDoUltimoEmprestimoDoLivroSelecionadoParaEditar: string = "";

  public valueDoLivroSelecionadoParaEditar: string = 'false';

  ngOnInit(){
    this.buscarInformacoesLivros();
    this.buscarEditoras();
    this.buscarGeneros();
    this.buscarPessoas();
    this.buscarAutor();
  }

  public abrirDialogParaEditarLivro(livroSelecionado: Livro){
    this.visibleDialogEditarLivro = true;
    this.livroSelecionadoParaEditar = livroSelecionado;
  }

  public fecharDialogParaEditarLivro(){
    this.visibleDialogEditarLivro = false;
  }

  public abrirDialogParaCriarLivro(){
    this.visibleDialogCriarLivro = true;
  }

  public fecharDialogParaCriarLivro(){
    this.visibleDialogCriarLivro = false;
  }

  public abrirDialogParaExcluirLivro(livroSelecionado: Livro){
    this.visibleDialogApagarLivro = true;
    this.livroSelecionadoParaApagar = livroSelecionado;
  }

  public fecharDialogParaExcluirLivro(){
    this.visibleDialogApagarLivro = false;
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

  public buscarAutor(){
    this.autorService.listarAutores().subscribe((dados: Autor[]) => {
      this.autores = dados;
    })
  }

  public criaNovoLivro(): void{
    this.formularioParaCriarNovoLivro.nome = this.nomeDoLivro;
    this.formularioParaCriarNovoLivro.editora = this.editoraSelecionada;
    this.formularioParaCriarNovoLivro.genero = this.generoSelecionado;
    this.formularioParaCriarNovoLivro.autor = this.autorSelecionado;
    this.formularioParaCriarNovoLivro.pessoaEmprestado = this.pessoaSelecionada;
    this.formularioParaCriarNovoLivro.quantidadeEmprestada = this.quantidadeEmprestada;
    this.formularioParaCriarNovoLivro.dataDoUltimoEmprestimo = this.dataDoUltimoEmprestimo;
    this.formularioParaCriarNovoLivro.disponivel = this.value;

    this.livroService.criarLivro(this.formularioParaCriarNovoLivro).subscribe(() => {
      console.log("Funcionou!");
      this.visibleDialogCriarLivro = false;
      this.buscarInformacoesLivros();
    })
  }

  public editaLivro() {
    if (this.livroSelecionadoParaEditar) {
      this.livroSelecionadoParaEditar.nome = this.nomeDoLivroSelecionadoParaEditar !== "" ? this.nomeDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.nome;
      this.livroSelecionadoParaEditar.editora = this.nomeDaEditoraDoLivroSelecionadoParaEditar.nome !== "" ? this.nomeDaEditoraDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.editora;
      this.livroSelecionadoParaEditar.genero = this.generoDoLivroSelecionadoParaEditar.nome !== "" ? this.generoDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.genero;
      this.livroSelecionadoParaEditar.autor = this.autorDoLivroSelecionadoParaEditar.nome !== "" ? this.autorDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.autor;
      this.livroSelecionadoParaEditar.pessoaEmprestado = this.pessoaDoLivroSelecionadoParaEditar.nome !== "" ? this.pessoaDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.pessoaEmprestado;
      this.livroSelecionadoParaEmprestar.quantidadeEmprestada = this.quantidadeEmprestadaDoLivroSelecionadoParaEditar;
      this.livroSelecionadoParaEditar.dataDoUltimoEmprestimo = this.dataDoUltimoEmprestimoDoLivroSelecionadoParaEditar !== "" ? this.dataDoUltimoEmprestimoDoLivroSelecionadoParaEditar : this.livroSelecionadoParaEditar.dataDoUltimoEmprestimo;
      this.livroSelecionadoParaEditar.disponivel = this.valueDoLivroSelecionadoParaEditar;
  
      if (this.livroSelecionadoParaEditar.id !== undefined) {
        this.livroService.editarLivro(this.livroSelecionadoParaEditar.id, this.livroSelecionadoParaEditar).subscribe(() => {
          this.visibleDialogEditarLivro = false;
          this.buscarInformacoesLivros();
        })
      } else {
        console.error("Livro não selecionado ou id indefinido");
      }
    } else {
      console.error("Livro não selecionado");
    }
  }
  
  

  public abrirDialogParaEmprestarLivro(livroSelecionado: Livro){
    this.visibleDialogEmprestarLivro = true;
    this.livroSelecionadoParaEmprestar = livroSelecionado;
  }

  public fecharDialogParaEmprestarLivro(){
    this.visibleDialogEmprestarLivro = false;
  }

  public abrirDialogParaDevolverLivro(livroSelecionado: Livro){
    this.visibleDialogDevolverLivro = true;
    this.livroSelecionadoParaDevolver = livroSelecionado;
  }

  public fecharDialogParaDevolverLivro(){
    this.visibleDialogDevolverLivro = false;
  }

  public abrirDialogParaApagarLivro(livroSelecionado: Livro){
    this.visibleDialogApagarLivro = true;
    this.livroSelecionadoParaApagar = livroSelecionado;
  }

  public fecharDialogParaApagarLivro(){
    this.visibleDialogApagarLivro = false;
  }

  public emprestaLivro() {
    if (this.livroSelecionadoParaEmprestar && this.livroSelecionadoParaEmprestar.id !== undefined) {
        this.formularioParaEmprestarLivro.pessoaEmprestado = this.pessoaSelecionadaParaEmprestarLivro;
        this.livroService.emprestarLivro(this.livroSelecionadoParaEmprestar.id, this.formularioParaEmprestarLivro).subscribe(() => {
          console.log("Livro emprestado com sucesso!");
          this.visibleDialogEmprestarLivro = false;
          this.buscarInformacoesLivros();
        });
    } else {
        console.error('Livro não selecionado ou ID indefinido.');
    }
}

  public devolveLivro(){
    if(this.livroSelecionadoParaDevolver && this.livroSelecionadoParaDevolver.id !== undefined){
      this.livroService.devolveLivro(this.livroSelecionadoParaDevolver).subscribe(() => {
        console.log("Livro devolvido com sucesso!");
        this.visibleDialogDevolverLivro = false;
        this.buscarInformacoesLivros();
      })
    }else{
      console.error('Livro não selecionado ou ID indefinido')
    }
  }

  public apagaLivro(){
    if(this.livroSelecionadoParaApagar && this.livroSelecionadoParaApagar.id !== undefined){
      this.livroService.apagarLivro(this.livroSelecionadoParaApagar.id).subscribe(() => {
        console.log('Livro apagado com sucesso!');
        this.visibleDialogApagarLivro = false;
        this.buscarInformacoesLivros();
      })
    } else{
      console.error('Livro apagado com fracasso!');
    }
  }

  
}

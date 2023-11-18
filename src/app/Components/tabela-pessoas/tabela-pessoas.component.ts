import { Component } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css']
})
export class TabelaPessoasComponent {

  constructor(private pessoaService: PessoaService){}

  public pessoas: Pessoa[] = [];

  public visibleDialogEditarPessoa: boolean = false;

  public visibleDialogCriarPessoa: boolean = false;

  public visibleDialogApagarPessoa: boolean = false;

  public nomeDaPessoa: string = "";

  public enderecoDaPessoa: string = "";

  public formularioParaCriarNovaPessoa: Pessoa = new Pessoa();

  public pessoaSelecionadaParaApagar: Pessoa = new Pessoa();


  ngOnInit(){
    this.buscarInformacoesPessoas();
  }

  public buscarInformacoesPessoas(){
    this.pessoaService.listarPessoas().subscribe((dados: Pessoa[]) => {
      this.pessoas = dados;
      console.log(dados);
    })
  }

  public abrirDialogParaEditarPessoa(){
    this.visibleDialogEditarPessoa = true;
  }

  public abrirDialogParaCriarPessoa(){
    this.visibleDialogCriarPessoa = true;
  }

  public fecharDialogParaCriarPessoa(){
    this.visibleDialogCriarPessoa = false;
  }

  public abrirDialogParaApagarPessoa(pessoaSelecionada: Pessoa){
    this.visibleDialogApagarPessoa = true;
    this.pessoaSelecionadaParaApagar = pessoaSelecionada;
  }

  public fecharDialogParaApagarPessoa(){
    this.visibleDialogApagarPessoa = false;
  }

  public criaNovaPessoa(): void{
    this.formularioParaCriarNovaPessoa.nome = this.nomeDaPessoa;
    this.formularioParaCriarNovaPessoa.endereco = this.enderecoDaPessoa;

    this.pessoaService.criarPessoa(this.formularioParaCriarNovaPessoa).subscribe(() => {
      console.log("Deu Certo!");
      this.visibleDialogCriarPessoa = false;
      this.buscarInformacoesPessoas();
      this.nomeDaPessoa = '';
      this.enderecoDaPessoa = '';
    })
  }

  public apagaPessoa(): void{
    if(this.pessoaSelecionadaParaApagar && this.pessoaSelecionadaParaApagar.id !== undefined){
      this.pessoaService.apagarPessoa(this.pessoaSelecionadaParaApagar.id).subscribe(() => {
        console.log('Pessoa  apagada com sucesso!');
        this.visibleDialogApagarPessoa = false;
        this.buscarInformacoesPessoas();
      })
    } else{
      console.error('Pessoa apagada com fracasso!');
    }
  }
}

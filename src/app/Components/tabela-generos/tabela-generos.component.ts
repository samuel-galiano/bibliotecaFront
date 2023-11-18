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

  public visibleDialogEditarGenero: boolean = false;

  public visibleDialogCriarGenero: boolean = false;

  public visibleDialogApagarGenero: boolean = false;

  public nomeDoGenero: string = "";

  public formularioParaCriarNovoGenero: Genero = new Genero();

  public generoQueSeraApagado: Genero = new Genero();

  public generoQueSeraEditado: Genero = new Genero();

  public nomeDoGeneroQueSeraEditado: string = "";

  ngOnInit(){
    this.buscarInformacoesGeneros();
  }

  public abrirDialogParaEditarGenero(generoSelecionado: Genero){
    this.visibleDialogEditarGenero = true;
    this.generoQueSeraEditado = generoSelecionado;
  }

  public fecharDialogParaEditarGenero(){
    this.visibleDialogEditarGenero = false;
  }

  public buscarInformacoesGeneros(){
    this.generoService.listarGeneros().subscribe((dados: Genero[]) => {
      this.generos = dados;
      console.log(dados);
    })
  }

  public abrirDialogParaCriarGenero(){
    this.visibleDialogCriarGenero = true;
  }

  public fecharDialogParaCriarGenero(){
    this.visibleDialogCriarGenero = false;
  }

  public abrirDialogParaApagarGenero(generoSelecionado: Genero){
    this.visibleDialogApagarGenero = true;
    this.generoQueSeraApagado = generoSelecionado;
  }

  public fecharDialogParaApagarGenero(){
    this.visibleDialogApagarGenero = false;
  }

  

  public criarNovoGenero(): void{
    this.formularioParaCriarNovoGenero.nome = this.nomeDoGenero;
    this.generoService.criarGenero(this.formularioParaCriarNovoGenero).subscribe(() => {
      console.log("Deu Certo!");
      this.visibleDialogCriarGenero = false;
      this.buscarInformacoesGeneros();
      this.nomeDoGenero = '';
    })
  }

  public deletaGenero(): void{
    if(this.generoQueSeraApagado && this.generoQueSeraApagado.id !== undefined){
        this.generoService.apagarGenero(this.generoQueSeraApagado.id).subscribe(() => {
        this.visibleDialogApagarGenero = false;
        this.buscarInformacoesGeneros();
      })
    } else {
      console.error("Não fundo :(");
    }
  }

  public editaGenero(){
    this.generoQueSeraEditado.nome = this.nomeDoGeneroQueSeraEditado;

    if(this.generoQueSeraEditado && this.generoQueSeraEditado.id !== undefined){
      this.generoService.editarGenero(this.generoQueSeraEditado.id, this.generoQueSeraEditado).subscribe(() => {
        this.visibleDialogEditarGenero = false; 
        this.buscarInformacoesGeneros();
      })
    }else{
      console.error("Editora não selecionada ou id indefinido");
    }
  }
}

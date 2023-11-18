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

  public visibleDialogCriarAutor: boolean = false;

  public visibleDialogApagarAutor: boolean = false; 

  public nomeDoAutor: string = '';

  public formularioParaCriarNovoAutor: Autor =new Autor();

  public autorQueSeraApagado: Autor = new Autor();

  public autorQueSeraEditado: Autor = new Autor();

  public nomeDoAutorQueSeraEditado: string = '';


  ngOnInit(): void {
    this.buscarInformacoesClientes();
    
  }

  public abrirDialogParaEditarAutor(autorSelecionado: Autor){
    this.visibleDialogEditarAutor = true;
    this.autorQueSeraEditado = autorSelecionado;
  }

  public fecharDialogParaEditarAutor(){
    this.visibleDialogEditarAutor = false;
  }

  public abrirDialogParaCriarAutor(){
    this.visibleDialogCriarAutor = true;
  }

  public fechaDialogParaCriarAutor(){
    this.visibleDialogCriarAutor = false;
    this.nomeDoAutor = '';
  }

  public abrirDialogParaApagarAutor(autorSelecionado: Autor){
    this.visibleDialogApagarAutor = true;
    this.autorQueSeraApagado = autorSelecionado;
  }

  public fecharDialogParaApagarAutor(){
    this.visibleDialogApagarAutor = false;
  }

  public buscarInformacoesClientes(): void {
    this.autorService.listarAutores().subscribe((dados: Autor[]) => {
      this.autores = dados;
      console.log(dados);
    });
  }

  public criaNovoAutor(): void{
    this.formularioParaCriarNovoAutor.nome = this.nomeDoAutor;
    this.autorService.criarAutor(this.formularioParaCriarNovoAutor).subscribe(() => {
      console.log("Deu Certo!");
      this.visibleDialogCriarAutor = false;
      this.buscarInformacoesClientes();
      this.nomeDoAutor = '';
    })
  }

  public deletaAutor(){
    if(this.autorQueSeraApagado && this.autorQueSeraApagado.id !== undefined){
      this.autorService.apagarAutor(this.autorQueSeraApagado.id).subscribe(() => {
        this.visibleDialogApagarAutor = false;
        this.buscarInformacoesClientes();
      })
    } else{
      console.log("Autor não selecionado ou id indefinido!");
    }
  }

  public editaAutor(){
    this.autorQueSeraEditado.nome = this.nomeDoAutorQueSeraEditado;

    if(this.autorQueSeraEditado && this.autorQueSeraEditado.id !== undefined){
      this.autorService.editarAutor(this.autorQueSeraEditado.id, this.autorQueSeraEditado).subscribe(() => {
        this.visibleDialogEditarAutor = false;
        this.buscarInformacoesClientes();
      })
    }else{
      console.error("Autor não selecionado ou id indefinido");
    }
  }
}

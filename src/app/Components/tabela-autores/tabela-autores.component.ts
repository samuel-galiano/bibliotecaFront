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

  public nomeDoAutor: string = '';

  public formularioParaCriarNovoAutor: Autor =new Autor();

  ngOnInit(): void {
    this.buscarInformacoesClientes();
    
  }

  public abrirDialogParaEditarAutor(){
    this.visibleDialogEditarAutor = true;
  }

  public abrirDialogParaCriarAutor(){
    this.visibleDialogCriarAutor = true;
  }

  public fechaDialogParaCriarAutor(){
    this.visibleDialogCriarAutor = false;
    this.nomeDoAutor = '';
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
}

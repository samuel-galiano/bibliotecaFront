import { Component } from '@angular/core';
import { Editora } from 'src/app/shared/model/Editora';
import { EditoraService } from 'src/app/shared/services/editora.service';

@Component({
  selector: 'app-tabela-editoras',
  templateUrl: './tabela-editoras.component.html',
  styleUrls: ['./tabela-editoras.component.css']
})
export class TabelaEditorasComponent {

  constructor(private editoraService: EditoraService) { }

  public editoras: Editora[] = [];

  public visibleDialogEditarEditora: boolean = false;

  public visibleDialogCriarEditora: boolean = false;

  public visibleDialogApagarEditora: boolean = false;

  public visibleDialogParaEditarEditora: boolean = false;

  public nomeDaEditora: string = "";

  public formularioParaCriarNovaEditora: Editora = new Editora();

  public editoraQueSeraApagada: Editora = new Editora();

  public editoraQueSeraEditada: Editora = new Editora();

  public nomeDaEditoraQueSeraEditada: string = '';

  ngOnInit(): void {
    this.buscarInformacoesEditoras();
  }

  public buscarInformacoesEditoras(): void {
    this.editoraService.listarEditoras().subscribe((dados: Editora[]) => {
      this.editoras = dados;
      console.log(dados);
    })
  }

  public abrirDialogParaEditarEditora(editoraSelecionada: Editora): void{
    this.visibleDialogEditarEditora = true;
    this.editoraQueSeraEditada = editoraSelecionada;
  }

  public abrirDialogParaCriarEditora(): void{
    this.visibleDialogCriarEditora = true;
  }

  public fecharDialogParaCriarEditora(): void{
    this.visibleDialogCriarEditora = false;
  }

  public abrirDialogParaApagarEditora(ediotaSelcionado: Editora){
    this.visibleDialogApagarEditora = true;
    this.editoraQueSeraApagada = ediotaSelcionado;
  }

  public fecharDialogParaApagarEditora(): void{
    this.visibleDialogApagarEditora = false;
  }

  public fecharDialogParaEditarEditora(): void{
    this.visibleDialogEditarEditora = false;
  }

  public criaNovaEditora(): void{
    this.formularioParaCriarNovaEditora.nome = this.nomeDaEditora;
    this.editoraService.criarEditora(this.formularioParaCriarNovaEditora).subscribe(() => {
      console.log("Deu Certo!");
      this.visibleDialogCriarEditora = false;
      this.buscarInformacoesEditoras();
      this.nomeDaEditora = '';
    })
  }

  public deletaEditora(): void{
    if(this.editoraQueSeraApagada && this.editoraQueSeraApagada.id !== undefined){
      this.editoraService.apagarEditora(this.editoraQueSeraApagada.id).subscribe(() => {
        this.visibleDialogApagarEditora = false;
        this.buscarInformacoesEditoras();
      })
    } else{
      console.error("Não funfo :(");
    }
  }

  public editaEditora(){
    this.editoraQueSeraEditada.nome = this.nomeDaEditoraQueSeraEditada;

    if(this.editoraQueSeraEditada && this.editoraQueSeraEditada.id !== undefined){
      this.editoraService.editarEditora(this.editoraQueSeraEditada.id, this.editoraQueSeraEditada).subscribe(() => {
        this.visibleDialogEditarEditora = false;
        this.buscarInformacoesEditoras();
      })
    }else{
      console.error("Editora não selecionada ou id indefinido");
    }
  }
}

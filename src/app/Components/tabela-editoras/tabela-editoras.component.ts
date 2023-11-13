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

  public nomeDaEditora: string = "";

  public formularioParaCriarNovaEditora: Editora = new Editora();

  ngOnInit(): void {
    this.buscarInformacoesEditoras();
  }

  public buscarInformacoesEditoras(): void {
    this.editoraService.listarEditoras().subscribe((dados: Editora[]) => {
      this.editoras = dados;
      console.log(dados);
    })
  }

  public abrirDialogParaEditarEditora(): void{
    this.visibleDialogEditarEditora = true;
  }

  public abrirDialogParaCriarEditora(): void{
    this.visibleDialogCriarEditora = true;
  }

  public fecharDialogParaCriarEditora(): void{
    this.visibleDialogCriarEditora = false;
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
}

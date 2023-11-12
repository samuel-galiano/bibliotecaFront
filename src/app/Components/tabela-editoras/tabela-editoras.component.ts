import { Component } from '@angular/core';
import { Editora } from 'src/app/shared/model/Editora';
import { EditoraService } from 'src/app/shared/services/editora.service';

@Component({
  selector: 'app-tabela-editoras',
  templateUrl: './tabela-editoras.component.html',
  styleUrls: ['./tabela-editoras.component.css']
})
export class TabelaEditorasComponent {

  constructor(private editoraService: EditoraService){}

  public editoras: Editora[] = [];

  ngOnInit(): void {
    this.buscarInformacoesEditoras();
  }

  public buscarInformacoesEditoras(): void {
    this.editoraService.listarEditoras().subscribe((dados: Editora[]) => {
      this.editoras = dados;
      console.log(dados);
    }
    
    )
  }
}

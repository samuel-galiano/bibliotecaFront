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

  ngOnInit(){
    this.buscarInformacoesPessoas();
  }

  public buscarInformacoesPessoas(){
    this.pessoaService.listarPessoas().subscribe((dados: Pessoa[]) => {
      this.pessoas = dados;
      console.log(dados);
    })
  }
}

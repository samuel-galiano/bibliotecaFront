import { Component } from '@angular/core';
import { Transacao } from 'src/app/shared/model/Transacao';
import { TransacaoService } from 'src/app/shared/services/transacao.service';

@Component({
  selector: 'app-tabela-transacao',
  templateUrl: './tabela-transacao.component.html',
  styleUrls: ['./tabela-transacao.component.css']
})
export class TabelaTransacaoComponent {

  constructor(private transacaoService: TransacaoService){}

  public transacoes: Transacao[] = [];

  ngOnInit(){
    this.buscarTransacoes();
  }

  public buscarTransacoes(){
    this.transacaoService.listarTransacoes().subscribe((dados: Transacao[]) => {
      this.transacoes = dados;
      console.log(dados);
    })
  }

}

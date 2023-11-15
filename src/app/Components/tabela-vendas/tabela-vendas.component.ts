import { Component } from '@angular/core';
import { Venda } from 'src/app/shared/model/Venda';
import { VendasService } from 'src/app/shared/services/vendas.service';

@Component({
  selector: 'app-tabela-vendas',
  templateUrl: './tabela-vendas.component.html',
  styleUrls: ['./tabela-vendas.component.css']
})
export class TabelaVendasComponent {

  constructor(private vendasService: VendasService){}

  public vendas: Venda[] = [];

  ngOnInit(){
    this.buscarVendas();
  }

  public buscarVendas(){
    this.vendasService.listarVendas().subscribe((dados: Venda[]) => {
      this.vendas = dados;
      console.log(dados);
    })
  }

}

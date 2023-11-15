import { Component } from '@angular/core';
import { VendaPorMes } from 'src/app/shared/model/VendaPorMes';
import { VendasService } from 'src/app/shared/services/vendas.service';

@Component({
  selector: 'app-tabela-vendas-por-mes',
  templateUrl: './tabela-vendas-por-mes.component.html',
  styleUrls: ['./tabela-vendas-por-mes.component.css']
})
export class TabelaVendasPorMesComponent {

  constructor(private vendasService: VendasService){}

  public vendasPorMes: VendaPorMes[] = [];

  ngOnInit(){
    this.buscarVendasPorMes();
  }

  public buscarVendasPorMes(){
    this.vendasService.consultarVendasPorMes().subscribe((dados: VendaPorMes[]) => {
      this.vendasPorMes = dados;
      console.log(dados);
    })
  }
}

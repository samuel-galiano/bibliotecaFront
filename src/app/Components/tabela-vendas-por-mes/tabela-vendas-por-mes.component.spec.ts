import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaVendasPorMesComponent } from './tabela-vendas-por-mes.component';

describe('TabelaVendasPorMesComponent', () => {
  let component: TabelaVendasPorMesComponent;
  let fixture: ComponentFixture<TabelaVendasPorMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaVendasPorMesComponent]
    });
    fixture = TestBed.createComponent(TabelaVendasPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

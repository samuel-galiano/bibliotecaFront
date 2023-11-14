import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaVendasComponent } from './tabela-vendas.component';

describe('TabelaVendasComponent', () => {
  let component: TabelaVendasComponent;
  let fixture: ComponentFixture<TabelaVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaVendasComponent]
    });
    fixture = TestBed.createComponent(TabelaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

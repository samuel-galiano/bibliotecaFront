import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTransacaoComponent } from './tabela-transacao.component';

describe('TabelaTransacaoComponent', () => {
  let component: TabelaTransacaoComponent;
  let fixture: ComponentFixture<TabelaTransacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaTransacaoComponent]
    });
    fixture = TestBed.createComponent(TabelaTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

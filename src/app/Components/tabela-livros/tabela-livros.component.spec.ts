import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaLivrosComponent } from './tabela-livros.component';

describe('TabelaLivrosComponent', () => {
  let component: TabelaLivrosComponent;
  let fixture: ComponentFixture<TabelaLivrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaLivrosComponent]
    });
    fixture = TestBed.createComponent(TabelaLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

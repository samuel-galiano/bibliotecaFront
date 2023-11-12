import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaGenerosComponent } from './tabela-generos.component';

describe('TabelaGenerosComponent', () => {
  let component: TabelaGenerosComponent;
  let fixture: ComponentFixture<TabelaGenerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaGenerosComponent]
    });
    fixture = TestBed.createComponent(TabelaGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

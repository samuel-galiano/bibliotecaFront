import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAutoresComponent } from './tabela-autores.component';

describe('TabelaAutoresComponent', () => {
  let component: TabelaAutoresComponent;
  let fixture: ComponentFixture<TabelaAutoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaAutoresComponent]
    });
    fixture = TestBed.createComponent(TabelaAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

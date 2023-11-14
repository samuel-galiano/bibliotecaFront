import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosPorAutorEGeneroComponent } from './livros-por-autor-e-genero.component';

describe('LivrosPorAutorEGeneroComponent', () => {
  let component: LivrosPorAutorEGeneroComponent;
  let fixture: ComponentFixture<LivrosPorAutorEGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosPorAutorEGeneroComponent]
    });
    fixture = TestBed.createComponent(LivrosPorAutorEGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

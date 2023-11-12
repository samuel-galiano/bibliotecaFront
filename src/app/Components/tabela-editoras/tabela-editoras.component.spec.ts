import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEditorasComponent } from './tabela-editoras.component';

describe('TabelaEditorasComponent', () => {
  let component: TabelaEditorasComponent;
  let fixture: ComponentFixture<TabelaEditorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaEditorasComponent]
    });
    fixture = TestBed.createComponent(TabelaEditorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

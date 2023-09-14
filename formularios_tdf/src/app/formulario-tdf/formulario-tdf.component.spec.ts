import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTDFComponent } from './formulario-tdf.component';

describe('FormularioTDFComponent', () => {
  let component: FormularioTDFComponent;
  let fixture: ComponentFixture<FormularioTDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTDFComponent]
    });
    fixture = TestBed.createComponent(FormularioTDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

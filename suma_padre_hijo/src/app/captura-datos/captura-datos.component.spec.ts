import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaDatosComponent } from './captura-datos.component';

describe('CapturaDatosComponent', () => {
  let component: CapturaDatosComponent;
  let fixture: ComponentFixture<CapturaDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturaDatosComponent]
    });
    fixture = TestBed.createComponent(CapturaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

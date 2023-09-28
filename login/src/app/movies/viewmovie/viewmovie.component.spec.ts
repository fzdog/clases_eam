import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmovieComponent } from './viewmovie.component';

describe('ViewmovieComponent', () => {
  let component: ViewmovieComponent;
  let fixture: ComponentFixture<ViewmovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmovieComponent]
    });
    fixture = TestBed.createComponent(ViewmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

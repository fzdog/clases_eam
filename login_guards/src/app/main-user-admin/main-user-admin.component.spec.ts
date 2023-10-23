import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserAdminComponent } from './main-user-admin.component';

describe('MainUserAdminComponent', () => {
  let component: MainUserAdminComponent;
  let fixture: ComponentFixture<MainUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUserAdminComponent]
    });
    fixture = TestBed.createComponent(MainUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

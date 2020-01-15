import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeEditComponent } from './appointment-type-edit.component';

describe('AppointmentTypeEditComponent', () => {
  let component: AppointmentTypeEditComponent;
  let fixture: ComponentFixture<AppointmentTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

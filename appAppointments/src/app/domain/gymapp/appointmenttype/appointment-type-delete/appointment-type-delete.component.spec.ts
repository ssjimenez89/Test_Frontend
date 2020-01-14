import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeDeleteComponent } from './appointment-type-delete.component';

describe('AppointmentTypeDeleteComponent', () => {
  let component: AppointmentTypeDeleteComponent;
  let fixture: ComponentFixture<AppointmentTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeDetailComponent } from './appointment-type-detail.component';

describe('AppointmentTypeDetailComponent', () => {
  let component: AppointmentTypeDetailComponent;
  let fixture: ComponentFixture<AppointmentTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

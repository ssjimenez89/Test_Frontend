import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentTypeCreateComponent } from './appointment-type-create.component';

describe('AppointmentTypeCreateComponent', () => {
  let component: AppointmentTypeCreateComponent;
  let fixture: ComponentFixture<AppointmentTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

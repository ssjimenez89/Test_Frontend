import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingScheduleDeleteComponent } from './training-schedule-delete.component';

describe('TrainingScheduleDeleteComponent', () => {
  let component: TrainingScheduleDeleteComponent;
  let fixture: ComponentFixture<TrainingScheduleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingScheduleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingScheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

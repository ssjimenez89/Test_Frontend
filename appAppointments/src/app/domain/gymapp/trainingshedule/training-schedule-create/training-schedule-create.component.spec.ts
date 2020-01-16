import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingScheduleCreateComponent } from './training-schedule-create.component';

describe('TrainingScheduleCreateComponent', () => {
  let component: TrainingScheduleCreateComponent;
  let fixture: ComponentFixture<TrainingScheduleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingScheduleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingScheduleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

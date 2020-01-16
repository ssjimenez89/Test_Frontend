import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingScheduleDetailComponent } from './training-schedule-detail.component';

describe('TrainingScheduleDetailComponent', () => {
  let component: TrainingScheduleDetailComponent;
  let fixture: ComponentFixture<TrainingScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingScheduleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

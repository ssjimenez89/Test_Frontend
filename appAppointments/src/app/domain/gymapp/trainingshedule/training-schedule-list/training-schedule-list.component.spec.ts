import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingScheduleListComponent } from './training-schedule-list.component';

describe('TrainingScheduleListComponent', () => {
  let component: TrainingScheduleListComponent;
  let fixture: ComponentFixture<TrainingScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

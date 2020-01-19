import { TrainingscheduleService } from './../trainingschedule.service';
import { TrainingSchedule } from './../model/trainingschedule.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from './../../coach/coach.service';
import { Observable } from 'rxjs';
import { Coach } from './../../coach/model/coach.model';

@Component({
  selector: 'app-training-schedule-edit',
  templateUrl: './training-schedule-edit.component.html',
  styleUrls: ['./training-schedule-edit.component.css']
})
export class TrainingScheduleEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  trainingScheduleData: any = {};
  coach: Observable<Coach[]>;
  hourList: Observable<any[]>;
  coachId: number;

  constructor(
    public trainingSchedulService: TrainingscheduleService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private coachService: CoachService
  ) {
  }

  ngOnInit() {
    this.trainingSchedulService.getTrainingSchedule(this.id)
      .subscribe((data: {}) => {
        this.trainingScheduleData = data;
      });
    this.reloadData();
  }

  reloadData() {
    this.coach = this.coachService.getCoachList();
    this.hourList = this.trainingSchedulService.getHourList();
  }

  TrainingScheduleEditComponent() {
    if (window.confirm('Ar you sure, you want to update an Training Schedule')) {
      this.trainingSchedulService.updateTrainingSchedule(this.id, this.trainingScheduleData.coach.id, this.trainingScheduleData).subscribe(data => {
        this.router.navigate(['trainingschedule/list']);
      });
    }
  }
}

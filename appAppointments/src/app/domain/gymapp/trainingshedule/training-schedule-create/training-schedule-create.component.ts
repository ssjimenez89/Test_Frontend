import { TrainingscheduleService } from './../trainingschedule.service';
import { TrainingSchedule} from './../model/trainingschedule.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from './../../coach/coach.service';
import { Observable } from 'rxjs';
import { Coach } from './../../coach/model/coach.model';

@Component({
  selector: 'app-training-schedule-create',
  templateUrl: './training-schedule-create.component.html',
  styleUrls: ['./training-schedule-create.component.css']
})
export class TrainingScheduleCreateComponent implements OnInit {

  trainingSchedule: TrainingSchedule = new TrainingSchedule();
  coachId: number;
  submitted = false;
  coach: Observable<Coach[]>;
  hourList: Observable<any[]>;

  constructor(
    private trainingScheduleService: TrainingscheduleService,
    private router: Router,
    private coachService: CoachService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.coach = this.coachService.getCoachList();
    this.hourList = this.trainingScheduleService.getHourList();
  }

  newTrainingSchedule(): void{
    this.submitted = false;
    this.trainingSchedule = new TrainingSchedule();
  }

  save(){
    this.trainingScheduleService.createTrainingSchedule ( this.coachId, this.trainingSchedule)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trainingSchedule = new TrainingSchedule();
    this.router.navigate(['trainingschedule/list']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}

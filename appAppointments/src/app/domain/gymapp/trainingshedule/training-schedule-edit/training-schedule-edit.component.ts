import { TrainingscheduleService } from './../trainingschedule.service';
import { TrainingSchedule } from './../model/trainingschedule.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training-schedule-edit',
  templateUrl: './training-schedule-edit.component.html',
  styleUrls: ['./training-schedule-edit.component.css']
})
export class TrainingScheduleEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  trainingScheduleData: any = {};

  constructor(
    public trainingSchedulService: TrainingscheduleService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.trainingSchedulService.getTrainingSchedule(this.id)
      .subscribe((data: {}) => {
        this.trainingScheduleData = data;
      });
  }

  TrainingScheduleEditComponent() {
    if (window.confirm('Ar you sure, you want to update an Training Schedule')) {
      this.trainingSchedulService.updateTrainingSchedule(this.id, this.trainingScheduleData).subscribe(data => {
        this.router.navigate(['trainingschedule/list']);
      });
    }
  }
}

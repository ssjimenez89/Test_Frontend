import { TrainingScheduleListComponent } from './../training-schedule-list/training-schedule-list.component';
import { TrainingscheduleService } from './../trainingschedule.service';
import { TrainingSchedule } from './../model/trainingschedule.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-schedule-detail',
  templateUrl: './training-schedule-detail.component.html',
  styleUrls: ['./training-schedule-detail.component.css']
})
export class TrainingScheduleDetailComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  trainingScheduleData: any = {};

  constructor(
    private trainingScheduleService: TrainingscheduleService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.trainingScheduleService.getTrainingSchedule(this.id)
      .subscribe((data: {}) => {
        this.trainingScheduleData = data;
      });
  }

  detailsTrainingSchedule() {
    this.router.navigate(['trainingschedule/list']);
  }

}

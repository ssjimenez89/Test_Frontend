import { TrainingscheduleService } from './../trainingschedule.service';
import { Observable } from 'rxjs';
import { TrainingSchedule } from './../model/trainingschedule.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-schedule-list',
  templateUrl: './training-schedule-list.component.html',
  styleUrls: ['./training-schedule-list.component.css']
})
export class TrainingScheduleListComponent implements OnInit {

  trainingschedule: Observable<TrainingSchedule[]>;
  name = 'TrainingSchedule';
  page = 1;
  pageSize = 5; 
  id: number;

  constructor(private trainingscheduleService: TrainingscheduleService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.trainingschedule = this.trainingscheduleService.getTrainingScheduleList();
  }

  idSelected(id: number){
    this.id = id;
  }

  deleteTrainingSchedule() {   
      this.trainingscheduleService.deleteTrainingSchedule(this.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));    
  }

  detailsTrainingSchedule(id: number) {
    this.trainingscheduleService.getTrainingSchedule(id);

  }

}

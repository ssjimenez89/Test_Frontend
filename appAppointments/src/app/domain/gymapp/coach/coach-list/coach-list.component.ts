import { CoachService } from './../coach.service';
import { Observable } from 'rxjs';
import { Coach } from './../model/coach.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  coach: Observable<Coach[]>;
  name = 'Coach';
  page = 1;
  pageSize = 5; 


  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.coach = this.coachService.getCoachList();
  }

  deleteCoach(id: number) {
    if (window.confirm('Ar you sure, you want to delete an Coach')) {
      this.coachService.deleteCoach(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  detailsCoache(id: number) {
    this.coachService.getCoach(id);

  }




}

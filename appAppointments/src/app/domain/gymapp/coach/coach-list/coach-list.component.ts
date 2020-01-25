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
  id: number;


  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.coach = this.coachService.getCoachList();
  }

  idSelected(id: number){
    this.id = id;
  }

  deleteCoach() {    
      this.coachService.deleteCoach(this.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));    
  }

  detailsCoache(id: number) {
    this.coachService.getCoach(id);

  }




}

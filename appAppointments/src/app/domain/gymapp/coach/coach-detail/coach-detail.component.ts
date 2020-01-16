import { CoachListComponent } from './../coach-list/coach-list.component';
import { CoachService } from './../coach.service';
import { Coach } from './../model/coach.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  coachData: any = {};

  constructor(
    private coachService: CoachService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.coachService.getCoach(this.id)
      .subscribe((data: {}) => {
        this.coachData = data;
      });
  }

  detailsCoach() {
    this.router.navigate(['coach/list']);
  }

} 

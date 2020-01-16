import { CoachService } from './../coach.service';
import { Coach } from './../model/coach.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-coach-edit',
  templateUrl: './coach-edit.component.html',
  styleUrls: ['./coach-edit.component.css']
})
export class CoachEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  coachData: any = {};

  constructor(
    public coachService: CoachService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.coachService.getCoach(this.id)
      .subscribe((data: {}) => {
        this.coachData = data;
      });
  }

  CoachEditComponent() {
    if (window.confirm('Ar you sure, you want to update an Coach')) {
      this.coachService.updateCoach(this.id, this.coachData).subscribe(data => {
        this.router.navigate(['coach/list']);
      });
    }
  }
}

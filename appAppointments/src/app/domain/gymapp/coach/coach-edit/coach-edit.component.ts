import { CoachService } from './../coach.service';
import { Coach } from './../model/coach.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-coach-edit',
  templateUrl: './coach-edit.component.html',
  styleUrls: ['./coach-edit.component.css']
})
export class CoachEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  coachData: any = {};
  sexList: Observable<any[]>;

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
    this.reloadData();
  }

  reloadData(){
    this.sexList = this.coachService.getSexList();
  }

  CoachEditComponent() {
    if (window.confirm('Ar you sure, you want to update an Coach')) {
      this.coachService.updateCoach(this.id, this.coachData).subscribe(data => {
        this.router.navigate(['coach/list']);
      });
    }
  }
}

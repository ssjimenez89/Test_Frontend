import { CoachService } from './../coach.service';
import { Coach} from './../model/coach.model';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css']
})
export class CoachCreateComponent implements OnInit {

  coach: Coach = new Coach();
  submitted = false;
  sexList: Observable<any[]>;

  constructor(
    private coachService: CoachService, 
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.sexList = this.coachService.getSexList();
  }

  newCoach(): void{
    this.submitted = false;
    this.coach = new Coach();
  }

  save(){
    this.coachService.createCoach(this.coach)
      .subscribe(data => console.log(data), error => console.log(error));
    this.coach = new Coach();
    this.router.navigate(['coach/list']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}

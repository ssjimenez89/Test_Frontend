import { CoachService } from './../coach.service';
import { Coach} from './../model/coach.model';
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css']
})
export class CoachCreateComponent implements OnInit {

  coach: Coach = new Coach();
  submitted = false;

  constructor(
    private coachService: CoachService, 
    private router: Router) { }

  ngOnInit() {
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

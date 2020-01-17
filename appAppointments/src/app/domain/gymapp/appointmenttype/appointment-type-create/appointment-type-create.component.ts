import { AppointmenttypeService } from './../appointmenttype.service';
import { AppointmentType} from '../models/appointmenttype.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-type-create',
  templateUrl: './appointment-type-create.component.html',
  styleUrls: ['./appointment-type-create.component.css']
})
export class AppointmentTypeCreateComponent implements OnInit {

  appointmentType: AppointmentType = new AppointmentType();
  submitted = false;

  constructor(
    private appointmentService: AppointmenttypeService, 
    private router: Router) { }

  ngOnInit() {
  }

  newAppointmentType(): void{
    this.submitted = false;
    this.appointmentType = new AppointmentType();
  }

  save(){
    this.appointmentService.createAppointmentType(this.appointmentType)
      .subscribe(data => console.log(data), error => console.log(error));
    this.appointmentType = new AppointmentType();
    this.router.navigate(['appointmenttype/list']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}

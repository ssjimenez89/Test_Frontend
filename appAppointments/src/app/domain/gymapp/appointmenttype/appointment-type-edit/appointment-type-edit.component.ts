import { AppointmenttypeService } from './../appointmenttype.service';
import { AppointmentType } from '../models/appointmenttype.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-appointment-type-edit',
  templateUrl: './appointment-type-edit.component.html',
  styleUrls: ['./appointment-type-edit.component.css']
})
export class AppointmentTypeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  appointmentTypeData: any = {};
  submitted = false;
 
  constructor(
    public appointmentService: AppointmenttypeService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentType(this.id)
      .subscribe((data: {}) => {
        this.appointmentTypeData = data;
      });
  }

  editAppointmentType() {
  
      this.appointmentService.updateAppointmentType(this.id, this.appointmentTypeData).subscribe(data => {
        this.router.navigate(['appointmenttype/list']);
      });
    
  }

  onSubmit(){
    this.submitted = true;
    this.editAppointmentType();
  }


}

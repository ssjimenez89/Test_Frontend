import { AppointmenttypeService } from './../appointmenttype.service';
import { AppointmentType } from './../models/appointment.model';
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
    if (window.confirm('Ar you sure, you want to update an Appointment Type')) {
      this.appointmentService.updateAppointmentType(this.id, this.appointmentTypeData).subscribe(data => {
        this.router.navigate(['appointmenttype/list']);
      });
    }
  }


}

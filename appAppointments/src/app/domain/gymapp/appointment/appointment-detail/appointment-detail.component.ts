import { AppointmentListComponent } from './../appointment-list/appointment-list.component';
import { AppointmentService } from './../appointment.service';
import { Appointment } from '../model/appointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  appointmentData: any = {};

  constructor(
    private appointmentService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointment(this.id)
      .subscribe((data: {}) => {
        this.appointmentData = data;
      });
  }

  detailsAppointment() {
    this.router.navigate(['appointment/list']);
  }

}

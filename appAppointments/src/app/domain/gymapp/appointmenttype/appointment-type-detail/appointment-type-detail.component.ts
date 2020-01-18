import { AppointmentTypeListComponent } from './../appointment-type-list/appointment-type-list.component';
import { AppointmenttypeService } from './../appointmenttype.service';
import { AppointmentType } from '../models/appointmenttype.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-appointment-type-detail',
  templateUrl: './appointment-type-detail.component.html',
  styleUrls: ['./appointment-type-detail.component.css']
})
export class AppointmentTypeDetailComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  appointmentTypeData: any = {};

  constructor(
    private appointmentService: AppointmenttypeService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointmentType(this.id)
      .subscribe((data: {}) => {
        this.appointmentTypeData = data;
      });
  }

  detailsAppointmentType() {
    this.router.navigate(['appointmenttype/list']);
  }

}

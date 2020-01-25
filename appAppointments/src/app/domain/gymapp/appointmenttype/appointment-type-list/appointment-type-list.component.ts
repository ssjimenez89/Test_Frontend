import { AppointmenttypeService } from './../appointmenttype.service';
import { Observable } from 'rxjs';
import { AppointmentType } from '../models/appointmenttype.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-type-list',
  templateUrl: './appointment-type-list.component.html',
  styleUrls: ['./appointment-type-list.component.css']
})
export class AppointmentTypeListComponent implements OnInit {

  appointmentType: Observable<AppointmentType[]>;
  name = 'Angular';
  page = 1;
  pageSize = 5;
  id: number;

  constructor(private appointmenttypeService: AppointmenttypeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.appointmentType = this.appointmenttypeService.getAppointmentTypeList();
  }

  idSelected(id: number){
    this.id = id;
  }


  deleteAppointmentType() {      
      this.appointmenttypeService.deleteAppointmentType(this.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    
  }

  detailsAppointmentType(id: number) {
    this.appointmenttypeService.getAppointmentType(id);

  }



}

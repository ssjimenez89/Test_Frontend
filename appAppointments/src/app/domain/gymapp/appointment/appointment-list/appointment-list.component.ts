import { AppointmentService } from './../appointment.service';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointment: Observable<Appointment[]>;
  name = 'Appointment';
  page = 1;
  pageSize = 5; 
  id: number;


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.appointment = this.appointmentService.getAppointmentList();
  }

  idSelected(id: number){
    this.id = id;
  }

  deleteAppointment() {  
      this.appointmentService.deleteAppointment(this.id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));    
  }

  detailsAppointment(id: number) {
    this.appointmentService.getAppointment(id);

  }

}

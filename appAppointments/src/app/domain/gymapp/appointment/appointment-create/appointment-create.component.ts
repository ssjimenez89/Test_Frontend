import { AppointmentService } from './../appointment.service';
import { Appointment} from '../model/appointment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmenttypeService } from './../../appointmenttype/appointmenttype.service';
import { TrainingscheduleService } from './../../trainingshedule/trainingschedule.service';
import { MemberService } from './../../member/member.service';
import { Observable } from 'rxjs';
import { AppointmentType } from './../../appointmenttype/models/appointmenttype.model';
import { TrainingSchedule } from './../../trainingshedule/model/trainingschedule.model';
import { Member } from './../../member/model/member.model';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  appointment: Appointment = new Appointment();
  submitted = false;
  appointmentType: Observable<AppointmentType[]>;
  trainingSchedule: Observable<TrainingSchedule[]>;
  member: Observable<Member[]>;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private appointmentTypeService: AppointmenttypeService,
    private trainingscheduleService: TrainingscheduleService,
    private memberService: MemberService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.appointmentType = this.appointmentTypeService.getAppointmentTypeList();
    this.trainingSchedule = this.trainingscheduleService.getTrainingScheduleList();
    this.member = this.memberService.getMemberList();
  }

  newAppointment(): void{
    this.submitted = false;
    this.appointment = new Appointment();
  }

  save(){
    this.appointmentService.createAppointment( this.appointment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.appointment = new Appointment();
    this.router.navigate(['appointment/list']);
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}

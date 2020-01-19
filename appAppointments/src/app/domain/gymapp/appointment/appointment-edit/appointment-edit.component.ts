import { AppointmentService } from './../appointment.service';
import { Appointment } from '../model/appointment.model';
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
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  appointmentData: any = {};
  appointmentType: Observable<AppointmentType[]>;
  trainingSchedule: Observable<TrainingSchedule[]>;
  member: Observable<Member[]>;

  constructor(
    public appointmentService: AppointmentService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private appointmentTypeService: AppointmenttypeService,
    private trainingscheduleService: TrainingscheduleService,
    private memberService: MemberService
  ) {
  }

  ngOnInit() {
    this.appointmentService.getAppointment(this.id)
      .subscribe((data: {}) => {
        this.appointmentData = data;
      });
    this.reloadData();
  }

  reloadData() {
    this.appointmentType = this.appointmentTypeService.getAppointmentTypeList();
    this.trainingSchedule = this.trainingscheduleService.getTrainingScheduleList();
    this.member = this.memberService.getMemberList();
  }

  editAppointment() {
    if (window.confirm('Ar you sure, you want to update an Appointment')) {
      this.appointmentService.updateAppointment(this.appointmentData.member.id, this.appointmentData.appointmentType.id, this.appointmentData.trainingSchedule.id, this.id, this.appointmentData).subscribe(data => {
        this.router.navigate(['appointment/list']);
      });
    }
  }

}

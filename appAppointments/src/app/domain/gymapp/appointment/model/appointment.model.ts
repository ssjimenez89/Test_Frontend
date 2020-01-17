import { AppointmentType } from '../../appointmenttype/models/appointmenttype.model';
import { TrainingSchedule } from '../../trainingshedule/model/trainingschedule.model';
import { Member } from '../../member/model/member.model';

export class Appointment {
    id: number;
    name: string;
    registrationDate: Date;
    appointmentType: AppointmentType;
    trainingSchedule: TrainingSchedule;
    member: Member;
}
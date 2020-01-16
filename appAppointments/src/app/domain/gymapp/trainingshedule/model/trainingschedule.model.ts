import { Coach } from '../../coach/model/coach.model';

export class TrainingSchedule {
    id: number;
    startTime: Date;
    endTime: Date;
    date: Date;
    coach: Coach;
}
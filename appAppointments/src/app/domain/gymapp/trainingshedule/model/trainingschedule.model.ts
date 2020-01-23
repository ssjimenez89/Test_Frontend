import { Coach } from '../../coach/model/coach.model';

export class TrainingSchedule {
    id: number;
    startTime: string;
    endTime: string;
    date: Date;
    coach: Coach;
}
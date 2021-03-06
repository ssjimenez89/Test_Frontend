import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingscheduleService {

  private baseUrl = '/api/trainingschedule';
  private baseUrlHour = '/api/hour';

  constructor(private http: HttpClient) { }

  getTrainingScheduleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTrainingSchedule(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrainingSchedule(coachId: number,  trainingschedule: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${coachId}`, trainingschedule);
  }

  updateTrainingSchedule(id: number, coachId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${coachId}/${id}`, value);
  }

  deleteTrainingSchedule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHourList(): Observable<any> {
    return this.http.get(`${this.baseUrlHour}`);
  }
}

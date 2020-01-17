import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingscheduleService {

  private baseUrl = '/api/trainingschedule';

  constructor(private http: HttpClient) { }

  getTrainingScheduleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTrainingSchedule(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrainingSchedule(trainingschedule: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, trainingschedule);
  }

  updateTrainingSchedule(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTrainingSchedule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}

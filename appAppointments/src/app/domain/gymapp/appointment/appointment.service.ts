import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = '/api/appointment';

  constructor(private http: HttpClient) { }

  getAppointmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAppointment(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAppointment(memberId: number, appointmentTypeId: number, trainingScheduleId: number, appoint: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${memberId}/${appointmentTypeId}/${trainingScheduleId}`, appoint);
  }

  updateAppointment(memberId: number, appointmentTypeId: number, trainingScheduleId: number, id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${memberId}/${appointmentTypeId}/${trainingScheduleId}/${id}`, value);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}

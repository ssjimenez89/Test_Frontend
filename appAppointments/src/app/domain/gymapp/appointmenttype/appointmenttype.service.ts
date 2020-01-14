import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmenttypeService {

  private baseUrl = '/api/appointmenttype';

  constructor(private http: HttpClient) { }

  getAppointmentTypeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAppointmentType(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAppointmentType(appointtype: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, appointtype);
  }

  updateAppointmentType(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAppointmentType(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


}

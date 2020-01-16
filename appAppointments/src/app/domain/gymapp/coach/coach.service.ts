import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  private baseUrl = '/api/coach';

  constructor(private http: HttpClient) { }

  getCoachList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCoach(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCoach(coach: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, coach);
  }

  updateCoach(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCoach(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}

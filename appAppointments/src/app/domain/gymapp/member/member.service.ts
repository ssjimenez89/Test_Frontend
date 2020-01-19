import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = '/api/member';
  private baseUrlSex = '/api/sex';

  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMember(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMember(member: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, member);
  }

  updateMember(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSexList(): Observable<any> {
    return this.http.get(`${this.baseUrlSex}`);
  }

}

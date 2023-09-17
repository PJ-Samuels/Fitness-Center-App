import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:3000'; // Update with your Express server URL

  constructor(private http: HttpClient,
    ) {}

  callExpress(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
  callExpressTest(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/center-info`, {user:data});
  }
  callExpress2(data: any): Observable<any> {
    console.log("data",data);
    const requestData = { user: data }
    return this.http.post(`${this.baseUrl}/login`, requestData);
  }
}

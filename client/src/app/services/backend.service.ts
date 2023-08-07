import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:3000'; // Update with your Express server URL

  constructor(private http: HttpClient) {}

  callExpress(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}

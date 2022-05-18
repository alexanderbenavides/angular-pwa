import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {
  private baseUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  saveToken(token: any): Observable<any> {   
    const body = {
      token
    }
    return this.http.post(this.baseUrl + '/save', body );
  }
}

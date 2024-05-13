import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Session from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private apiUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getSessionsByFormationId(id : number): Observable<Session[]> {
    return this.httpClient.get<Session[]>(`${this.apiUrl}/sessions/formations/${id}`);
  }

}

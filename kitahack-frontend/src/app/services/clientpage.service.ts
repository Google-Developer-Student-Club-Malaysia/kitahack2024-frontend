import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/env';
import { Injectable } from '@angular/core';
import { ClientPage } from '../types/clientpage.type';

@Injectable({
  providedIn: 'root',
})
export class ClientPageService {
  constructor(private http: HttpClient) {}

  getClientPages(): Observable<ClientPage[]> {
    return this.http.get<ClientPage[]>(`${environment.api.baseUrl}/client_page/`);
  }

  getClientPage(id: string): Observable<ClientPage> {
    return this.http.get<ClientPage>(`${environment.api.baseUrl}/client_page/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/env';
import { ChapterType } from '../types/chapter.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  constructor(private http: HttpClient) {}

  getList(): Observable<ChapterType[]> {
    return this.http.get<ChapterType[]>(`${environment.api.baseUrl}/chapter/`);
  }
}

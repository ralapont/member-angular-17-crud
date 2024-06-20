import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../models/state.model';

const baseUrl = 'http://localhost:8081/api/states';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<State[]> {
    return this.http.get<State[]>(baseUrl);
  }

  get(id: any): Observable<State> {
    return this.http.get<State>(`${baseUrl}/${id}`);
  }
}

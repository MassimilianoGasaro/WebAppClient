import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Expense } from '../interfaces/expenses';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private apiBaseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public post(endpoint: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.apiBaseUrl}${endpoint}`, body);
  }

  public get(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}${endpoint}`, {});
  }


}

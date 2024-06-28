import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private apiBaseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public post(endpoint: string): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseUrl}${endpoint}`, {});
  }

  public get(endpoint: string): Observable<Array<Record<string, string>>> {
    return this.httpClient.get<Array<Record<string, string>>>(`${this.apiBaseUrl}${endpoint}`, {});
  }


}

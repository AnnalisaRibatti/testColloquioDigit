import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ENVIRONMENT } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPexelsService {

  private apiUrl = 'https://api.pexels.com/v1';
  private headers = new HttpHeaders({
    Authorization: ENVIRONMENT.apiKey
  });

  constructor(private http: HttpClient) {}

   getImage(): Observable<PexelsResponse> {
    return this.http.get<PexelsResponse>('mock/esempioResponse.json')
    //return this.http.get<PexelsResponse>(this.apiUrl, { headers: this.headers });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '../interfaces/http.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  login({username, password}: {username: string, password: string}): Observable<HttpResponse<{}>> {
    return this.httpClient.post<HttpResponse<{}>>( this.apiUrl + 'login', {
      username,
      password
    });
  }

  register({username, password}: {username: string, password: string}): Observable<HttpResponse<{}>> {
    return this.httpClient.post<HttpResponse<{}>>( this.apiUrl + 'register', {
      username,
      password
    });
  }  

}

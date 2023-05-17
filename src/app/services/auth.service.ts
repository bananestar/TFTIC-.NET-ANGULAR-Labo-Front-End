import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const AUTH_API = 'https://localhost:7060/api/User/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this._httpClient.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(
    email: string,
    password: string,
    passwordConfirmation: string,
    pseudo: string
  ): Observable<any> {
    return this._httpClient.post(
      AUTH_API + 'register',
      {
        email,
        password,
        passwordConfirmation,
        pseudo,
      },
      httpOptions
    );
  }
}

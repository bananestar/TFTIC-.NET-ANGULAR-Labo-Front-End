import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _userEndPoint = 'https://localhost:7060/api/User';

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<User[]> {
    return this._httpClient.get<User[]>(this._userEndPoint);
  }
}

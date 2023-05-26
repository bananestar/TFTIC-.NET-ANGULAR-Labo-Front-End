import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'https://localhost:7115/api/User/';
  constructor(
    private _httpClient: HttpClient,
    private _storageService: StorageService
  ) {}

  login(login: Login): Observable<string> {
    return this._httpClient.post(this.api + 'login/', login, {
      responseType: 'text',
    });
  }

  register(register: Register): Observable<any> {
    return this._httpClient.post(this.api + 'create/', register, {
      responseType: 'text',
    });
  }

  logOut(): void {
    this._storageService.clean();
  }
}

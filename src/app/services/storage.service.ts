import { Injectable } from '@angular/core';
import { Jwt } from '../models/jwt.model';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    sessionStorage.clear();
  }

  saveUser(token: string): void {
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, JSON.stringify(token));
  }

  getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) return JSON.parse(user);
    return {};
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) return true;
    return false;
  }
}

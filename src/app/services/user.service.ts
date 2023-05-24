import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api = 'https://localhost:7115/api/User/';
  constructor(
    private _httpClient: HttpClient,
    private storageService: StorageService
  ) {}

  get(): Observable<User[]> {
    const token = this.storageService.getUser();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this._httpClient.get<User[]>(this.api, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Rediriger l'utilisateur vers la page de connexion, afficher un message, etc.
          return throwError(() => new Error('Token invalide ou expiré'));
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
}

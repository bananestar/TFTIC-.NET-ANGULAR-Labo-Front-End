import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: Register = {
    pseudo: '',
    email: '',
    password: '',
    checkPassword: '',
  };

  isLoggedIn = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = this.storageService.isLoggedIn();
    }
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe({
      next: (data) => {
        console.log(data);

        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        console.log(err);

        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      },
    });
  }
}

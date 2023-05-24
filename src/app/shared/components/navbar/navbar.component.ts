import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn())
      this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(this.isLoggedIn ? 'connecter' : 'déconner');
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['/home']);
    location.reload();
  }
}

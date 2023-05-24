import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn())
      this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(this.isLoggedIn ? 'connecter' : 'déconner');
  }
}

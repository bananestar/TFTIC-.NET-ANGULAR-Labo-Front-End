import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { JwtService } from 'src/app/services/jwt.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[] = []

  isLoggedIn = false;
  isAdmin = false;

  constructor(
    private storageService: StorageService,
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      const user = this.jwtService.decodeToken(this.storageService.getUser());
      if (user.role == 'admin') {
        this.isAdmin = true;
      }
      this.userService.get().subscribe((data) => {
        this.users = data;
      });
      this.isLoggedIn = this.storageService.isLoggedIn();
    }
  }

  open(userID:number): void {
    console.log(userID);

    
  }
}

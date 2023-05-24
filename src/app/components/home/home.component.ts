import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { User } from 'src/app/models/user.model';
import { JwtService } from 'src/app/services/jwt.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  isLoggedIn = false;
  isAdmin = false;

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private storageService: StorageService,
    private jwtService: JwtService,
    private userService: UserService,
    private modalService: MdbModalService
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

  openModal(user:User) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
      data: { user : user},
    });
  }
}

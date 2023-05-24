import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  user!: User;
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private userService: UserService
  ) {}

  confirmDeleted(userID: number) {
    this.userService.delete(userID).subscribe({
      next: () => {
        this.reloadPage();
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  reloadPage(): void {
    location.reload();
  }
}

import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  constructor(
    private readonly apiService: ApiService
  ) { }

  public users = this.apiService.users;

  public page: number = 1;

  public selectedUser: any;

  public isModalDialogVisible: boolean = false;

  public isNewForm: boolean = false;

  public currentUser: any;

  deleteUser(event: Event, user: any) {
    event.stopPropagation();
    if (confirm("Are you sure to delete?")) {
      this.apiService.deleteUser(user.id);
      this.users = this.apiService.get('messages');
      this.selectedUser = null;
    }
  }

  addUser(user: IUser) {
    const newID = Math.floor(Math.random() * 1000 + 1);
    this.apiService.addUserData({ ...user, id: newID });
    this.users = this.apiService.get('messages');
  }

  putNewUserData(user: IUser) {
    const currentID = this.selectedUser.id;
    this.apiService.updateUserData({ ...user, id: currentID });
    this.users = this.apiService.get('messages');
  }

  addData(user: IUser) {
    if (this.isNewForm) {
      this.addUser(user);
    } else {
      this.putNewUserData(user);
    }
    this.closeDialog();
    this.selectedUser = null;
  }

  showUser(user: any): void {
    this.selectedUser = user;
  }

  showDialogForm() {
    this.isModalDialogVisible = true;
    this.isNewForm = true;
  }

  showDialogFormCreated(selectedUser: any) {
    if (selectedUser) {
      this.isModalDialogVisible = true;
      this.isNewForm = false;
    }
  }

  closeDialog() {
    this.isModalDialogVisible = false;
  }
}

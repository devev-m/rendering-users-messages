import { Component, Input } from '@angular/core';
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
  
  public p: number = 1;
  public selectedUser: any;
  public isModalDialogVisible: boolean = false;

  deleteUser(id: any){
    if(confirm("Are you sure to delete?")) {
      if(id == this.selectedUser.id) {
        this.selectedUser = '';
      }
      this.apiService.deleteUser(id);
      this.users = this.apiService.get('messages');
    }
  }

  addData(user: IUser){
    // this.apiService.addUserData(this.user)
    console.log(user);
    // this.users = this.apiService.get('messages');
  }

  // changeUser(user: any){
  //   console.log(user);
  // }

  showUser(user: any): void {
    this.selectedUser = user;
  }

  showDialogForm() {
		this.isModalDialogVisible = true;
	}

  closeDialog() {
    this.isModalDialogVisible = false;
  }
}

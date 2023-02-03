import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

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
  public active: boolean = false;

  deleteUser(id: any){
    if(confirm("Are you sure to delete?")) {
      this.apiService.deleteUser(id);
      this.users = this.apiService.get('messages');
    }
  }

  // changeUser(user: any){
  //   console.log(user);
  // }

  // addUserData(user: any){
  //   console.log(user);
  // }

  toggle() {
    this.active = !this.active
  }

  showUser(user: any) {
    this.selectedUser = user;
    // this.toggle();
  }
}

import { Component } from '@angular/core';
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

  public readonly users = this.apiService.users;

  deleteUser(user: any){
    console.log(user);
  }

  // changeUser(user: any){
  //   console.log(user);
  // }

  // addUser(user: any){
  //   console.log(user);
  // }

  active: boolean = false;
  toggle() {
    this.active = !this.active
  }

  p: number = 1;
}

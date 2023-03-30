import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMessage } from '../models/message';

const API_URL = 'http://localhost:4000/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public usersArray = this.get('messages');

  // GET: get users from the server
  public get(url: string): Observable<any> {
    return this.http.get(API_URL + url).pipe(map((res) => res));
  }

  // DELETE: delete user from the server
  public deleteUser(id: string) {
    this.http.delete(API_URL + 'messages/' + id).subscribe();
  }

  // ADD: add new data to the server
  addUserData(user: any) {
    this.http.post(API_URL + 'messages', user).subscribe();
  }

  // UPDATE: update user
  updateUserData(updatedUser: IMessage) {
    this.http
      .put(API_URL + 'messages/' + updatedUser.id, updatedUser)
      .subscribe();
  }
}

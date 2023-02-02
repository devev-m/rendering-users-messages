import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:4000/';

@Injectable({
   providedIn: 'root'
})

export class ApiService {

   constructor(
      private http: HttpClient
   ) { }

   // GET: get users from the server
   public users = this.get('messages')

   public get(url: string): Observable<any> {
      return this.http.get(API_URL + url).pipe(map(res => res));
   }
   
   // DELETE: delete user from the server
   public deleteUser(user: any) {
      return this.http.delete(API_URL + 'messages/' + user.id);
   }

   // PUT: put new data to the server
   public putUser(user: any) {
      return this.http.put(API_URL + 'messages/', user);
   }
}
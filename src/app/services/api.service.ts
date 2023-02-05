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
   public deleteUser(id: string) {
      this.http.delete(API_URL + 'messages/' + id)
      .subscribe();
   }

   // ADD: add new data to the server
   addUserData(userData: any) {
      // const headers = {'content-type': 'application/json'}  
      const body = JSON.stringify(userData);
      this.http.post(API_URL + 'messages/', body);
      // return this.http.post(API_URL + 'messages', body, {'headers': headers})
   }

   // UPDATE: update users data
   // updateUser(updatedUser: any): Observable<any> {  
   //    const body = JSON.stringify(updatedUser);
   //    return this.http.put(API_URL + 'messages/' + {updatedUser.id}, body);
   // }
}
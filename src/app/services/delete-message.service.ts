import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, switchMap } from 'rxjs';
import { API_URL } from '../components/const';

@Injectable({
  providedIn: 'root',
})
export class DeleteMessageService {
  private readonly deleteMessageActionSubject = new ReplaySubject<number>(1);

  public readonly deleteMessageAction$ = this.deleteMessageActionSubject
    .asObservable()
    .pipe(switchMap((id) => this.request(id)));

  constructor(private readonly http: HttpClient) {}

  public deleteMessage(id: number): void {
    this.deleteMessageActionSubject.next(id);
  }

  private request(id: number) {
    return this.http.delete(`${API_URL}/messages/${id}`);
  }
}

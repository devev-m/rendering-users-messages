import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, switchMap } from 'rxjs';
import { IMessage } from '../models/message';
import { API_URL } from '../components/const';

@Injectable({
  providedIn: 'root',
})
export class MessageListService {
  private readonly getMessageListSubject = new ReplaySubject<void>(1);

  public readonly messageList$ = this.getMessageListSubject
    .asObservable()
    .pipe(switchMap(() => this.request()));

  constructor(private readonly http: HttpClient) {}

  public fetch(): void {
    this.getMessageListSubject.next();
  }

  private request() {
    return this.http.get<IMessage[]>(`${API_URL}/messages`);
  }
}

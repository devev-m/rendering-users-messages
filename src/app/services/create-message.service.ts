import { Injectable } from '@angular/core';
import { API_URL } from '../components/const';
import { IMessage } from '../models/message';
import { ReplaySubject, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateMessageService {
  private readonly createMessageActionSubject = new ReplaySubject<IMessage>(1);

  public readonly createMessageAction$ = this.createMessageActionSubject
    .asObservable()
    .pipe(switchMap((messageData) => this.request(messageData)));

  constructor(private readonly http: HttpClient) {}

  public createMessage(messageData: IMessage) {
    return this.createMessageActionSubject.next(messageData);
  }

  private request(messageData: IMessage) {
    return this.http.post(`${API_URL}/messages`, messageData);
  }
}

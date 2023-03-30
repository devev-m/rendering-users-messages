import { Injectable } from '@angular/core';
import { ReplaySubject, switchMap } from 'rxjs';
import { IMessage } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../components/const';

@Injectable({
  providedIn: 'root',
})
export class UpdateMessageService {
  private readonly updateMessageActionSubject = new ReplaySubject<IMessage>(1);

  public readonly updateMessageAction$ = this.updateMessageActionSubject
    .asObservable()
    .pipe(switchMap((updatedMessage) => this.request(updatedMessage)));

  constructor(private readonly http: HttpClient) {}

  public updateMessage(updatedMessage: IMessage): void {
    this.updateMessageActionSubject.next(updatedMessage);
  }

  private request(updatedMessage: IMessage) {
    return this.http.put(
      `${API_URL}/messages/${updatedMessage.id}`,
      updatedMessage
    );
  }
}

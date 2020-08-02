import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  formSubmitted = false;

  constructor(private http: HttpClient) {}

  sendMessage(userData: User) {
    return this.http
      .post(
        'https://portfolio-contact-12.firebaseio.com/messages.json',
        userData
      )
      .toPromise();
  }
}

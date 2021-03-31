import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from './notification-data.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: Subject<NotificationData> = new Subject()
  
  get notifications() {
    return this.notification$.asObservable()
  }
  
  constructor() { }

  show(text: string, duration = 5000) {
    this.notification$.next({ text, duration })
  }
}

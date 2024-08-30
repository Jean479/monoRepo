import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetterLoggerService {
  listMessage: string[] = []

  constructor() {
    console.log('constructor BetterLoggerService');
  }

  info(message: string) {
    this.listMessage.push(message);
    console.log('info BetterLoggerService :', message);
  }

  list() {
    console.log(this.listMessage)
  }

}

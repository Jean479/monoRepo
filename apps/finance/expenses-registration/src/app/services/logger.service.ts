import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  listMessage: string[] = []

  constructor() {
    console.log('constructor LoggerService');
  }

  info(message: string) {
    this.listMessage.push(message);
    console.log('info LoggerService :', message);
  }

  list() {
    console.log(this.listMessage)
  }
}

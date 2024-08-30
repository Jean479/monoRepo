import { inject, Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BasicExtendedService extends BasicService {
  
  private logger = inject(LoggerService);
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   //@ts-ignore
   constructor() {
     super();
    console.log('constructor BasicExtendedService');
    this.logger.info('this.router.url:' + this.router.url);
    this.logger.info('BasicExtendedService msg info')
  }
}

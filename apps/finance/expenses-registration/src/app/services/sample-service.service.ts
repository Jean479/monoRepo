import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
  
  data = 'maDataService';

  constructor() {
    console.log(' >>> init service');
   }
}

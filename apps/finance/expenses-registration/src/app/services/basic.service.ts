import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  protected router = inject(Router);

  constructor() {
    console.log('constructor BasicService');
  }
}

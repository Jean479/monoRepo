import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  //protected router = inject(Router);

  constructor(private router: Router) {
    console.log('constructor BasicService');
  }
}

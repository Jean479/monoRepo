import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, NavbarItem } from '@bt-libs/shared/ui/common-components';
import { BASE_URL } from './app.config';
import { BasicExtendedService } from './services/basic-extended.service';
import { TranslocoDirective, TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { TranslatePipe } from './transloco-loader';
import { TranslocoCurrencyPipe, TranslocoDatePipe } from '@jsverse/transloco-locale';
import { HightlightDirective } from '@bt-libs/shared/ui/common-directives';
import { NgFor } from '@angular/common';
  

@Component({
  standalone: true,
  imports: [
    RouterModule, NavbarComponent, TranslocoDirective,
    TranslocoPipe, TranslatePipe, TranslocoCurrencyPipe, NgFor, 
    TranslocoDatePipe, HightlightDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  @ViewChild (NavbarComponent, {static: true}) navBar!: NavbarComponent;

  title = 'finance-expenses-registration';
  transLocoService = inject(TranslocoService);

  navItems: NavbarItem[] = [
    {label: 'expenses overview', route: '/expenses-overview'},
    {label: 'expenses approval', route: '/expenses-approval'},
  ];

  languages_old: string[] = [
    'fr',
    'en',
    'gb'
  ];

  languages = this.transLocoService.getAvailableLangs() as string[];

  aMessage = 'msg-goodnight';

  currentDate = Date.now();

  //bUrl = inject(BASE_URL);
  constructor(
    @Inject(BASE_URL) private bUrl: string,
    private basicExtendedService: BasicExtendedService) {

  }

  ngOnInit(): void {
    console.log(' navbar:', this.navBar);
    console.log(' base url:', this.bUrl);
  }

  onLanguageChange($event: string) {
    console.log(' >>> ', $event);     
    this.transLocoService.setActiveLang($event);
  }

}

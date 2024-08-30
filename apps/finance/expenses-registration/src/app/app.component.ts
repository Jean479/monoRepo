import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, NavbarItem } from '@bt-libs/shared/ui/common-components';
import { BASE_URL } from './app.config';
import { BasicExtendedService } from './services/basic-extended.service';


@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  @ViewChild (NavbarComponent, {static: true}) navBar!: NavbarComponent;

  title = 'finance-expenses-registration';

  navItems: NavbarItem[] = [
    {label: 'expenses overview', route: '/expenses-overview'},
    {label: 'expenses approval', route: '/expenses-approval'},
  ];

  languages: string[] = [
    'fr',
    'de',
    'gb'
  ]
  //bUrl = inject(BASE_URL);
  constructor(@Inject(BASE_URL) private bUrl: string,private basicExtendedService: BasicExtendedService) {

  }

  ngOnInit(): void {
    console.log(' navbar:', this.navBar);
    console.log(' base url:', this.bUrl);
  }
 

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent, NavbarItem } from '@bt-libs/shared/ui/common-components';


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

  ngOnInit(): void {
    console.log(' navbar:', this.navBar);
    
  }
 

}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bt-libs-ui-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnChanges, OnInit {

  @Input({transform: addHome, required: true}) navbarItems!: NavbarItem[];
  // private _navItems: NavbarItem[] = [];

  // @Input()
  // set navbarItems(value: NavbarItem[]) {
  //   this._navItems = [{label: 'home', route: '/'}, ...value]
  // }
  // get navbarItems(): NavbarItem[] {
  //   return this._navItems;
  // }
  
  //@Input() navbarItems!: NavbarItem[];
  // navbarItems = input([], { transform: addHome });
  @Input() languages!: string[];
  // languages = input<string[]>([]);

  @Output() languageChange = new EventEmitter();

  ngOnInit(): void {
    console.log(' init:')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(' chgna:', changes)
  }
}

function addHome(items: NavbarItem[]): NavbarItem[] {
  return [{ label: 'home', route: '/' }, ...items];
}

export interface NavbarItem {
  label: string;
  route: string
}

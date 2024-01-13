import { Component, Input } from '@angular/core';
import { ClientPage } from '../../types/clientpage.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input()
  clientPages: ClientPage[] = [];

  currentDropdown: null | 'events' | 'more' = null;
  currentSidemenu: null | 'events' | 'more' = null;

  changeDropdown(dropdown: 'events' | 'more') {
    if (this.currentDropdown === dropdown) {
      this.currentDropdown = null;
    } else {
      this.currentDropdown = dropdown;
    }
  }

  changeSidemenu(sidemenu: 'events' | 'more') {
    if (this.currentSidemenu === sidemenu) {
      this.currentSidemenu = null;
    } else {
      this.currentSidemenu = sidemenu;
    }
  }
}

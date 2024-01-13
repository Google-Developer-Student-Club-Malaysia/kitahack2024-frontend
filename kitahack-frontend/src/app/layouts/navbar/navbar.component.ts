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

  moreButtonOpen = false;
  moreNavbarOpen = false;
  eventButtonOpen = false;
  eventNavbarOpen = false;

  toggleMoreButton() {
    this.moreButtonOpen = !this.moreButtonOpen;
  }

  toggleMoreNavbar() {
    this.moreNavbarOpen = !this.moreNavbarOpen;
  }

  toggleEventButton() {
    this.eventButtonOpen = !this.eventButtonOpen;
  }

  toggleEventNavbar() {
    this.eventNavbarOpen = !this.eventNavbarOpen;
  }

  toggleEventNavbarDelay() {
    setTimeout(() => {
      this.eventButtonOpen = false
    }, 100);
  }
}

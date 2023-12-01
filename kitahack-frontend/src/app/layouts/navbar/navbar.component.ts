import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navbarOpen = false;
  buttonOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleButton() {
    this.buttonOpen = !this.buttonOpen;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  show: null | string = null;

  onShowEvents() {
    alert('asdf');
    if (this.show === 'events') {
      this.show = null;
      return;
    }
    this.show = 'events';
  }

  onHide() {
    this.show = null;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
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

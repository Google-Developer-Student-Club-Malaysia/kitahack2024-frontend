import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css',
})
export class CheckListComponent {
  @Input() value: any;
}

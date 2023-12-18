import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-list',
  templateUrl: './nested-list.component.html',
  styleUrl: './nested-list.component.css',
})
export class NestedListComponent {
  @Input()
  value: any;

  @Input()
  style: string = 'ordered';
}

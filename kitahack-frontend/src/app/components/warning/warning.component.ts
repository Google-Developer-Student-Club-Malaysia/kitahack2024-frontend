import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css',
})
export class WarningComponent {
  @Input()
  title: string | undefined;

  @Input()
  message: string | undefined;
}

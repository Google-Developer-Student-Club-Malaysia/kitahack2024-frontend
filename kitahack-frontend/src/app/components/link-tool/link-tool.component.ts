import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-tool',
  templateUrl: './link-tool.component.html',
  styleUrl: './link-tool.component.css'
})
export class LinkToolComponent {
  @Input() value: any
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-tool',
  templateUrl: './link-tool.component.html',
  styleUrl: './link-tool.component.css',
})
export class LinkToolComponent {
  @Input()
  link: string | undefined;

  @Input()
  title: string | undefined;

  @Input()
  description: string | undefined;
}

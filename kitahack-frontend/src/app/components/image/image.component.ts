import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  @Input()
  url: string | undefined;

  @Input()
  caption: string | undefined;

  @Input()
  withBorder: boolean = false;

  @Input()
  stretched: boolean = false;

  @Input()
  withBackground: boolean = false;
}

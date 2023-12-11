import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css',
})
export class ChapterComponent {
  @Input() name: string = 'Loading..';
  @Input() logo_url: string = 'https://via.placeholder.com/500x150';
}

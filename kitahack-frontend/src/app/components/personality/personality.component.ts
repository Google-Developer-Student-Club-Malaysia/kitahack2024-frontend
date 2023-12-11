import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrl: './personality.component.css',
})
export class PersonalityComponent {
  @Input()
  name: string | undefined;

  @Input()
  description: string | undefined;

  @Input()
  link: string | undefined;

  @Input()
  photo: string | undefined;
}

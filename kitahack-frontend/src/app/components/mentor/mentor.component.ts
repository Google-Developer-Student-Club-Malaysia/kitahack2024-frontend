import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  template: '<p>{{name}}</p><p>{{title}}</p><p>{{description}}</p>',
  styleUrl: './mentor.component.css',
})
export class MentorComponent {
  @Input() name: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
}

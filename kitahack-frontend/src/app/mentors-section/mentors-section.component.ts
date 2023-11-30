import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from '../mentor/mentor.component';

@Component({
  selector: 'app-mentors-section',
  standalone: true,
  imports: [CommonModule, 
  MentorComponent],
  templateUrl: './mentors-section.component.html',
  styleUrl: './mentors-section.component.css'
})
export class MentorsSectionComponent {

}

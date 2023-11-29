import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule , ChatboxComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}

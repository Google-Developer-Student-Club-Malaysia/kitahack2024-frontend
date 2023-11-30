import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from "../chatbox/chatbox.component";

@Component({
    selector: 'app-submission-criteria',
    standalone: true,
    templateUrl: './submission-criteria.component.html',
    styleUrl: './submission-criteria.component.css',
    imports: [CommonModule, ChatboxComponent]
})
export class SubmissionCriteriaComponent {

}

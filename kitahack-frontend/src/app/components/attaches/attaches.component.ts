import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attaches',
  templateUrl: './attaches.component.html',
  styleUrl: './attaches.component.css',
})
export class AttachesComponent {
  @Input() value: any;
}

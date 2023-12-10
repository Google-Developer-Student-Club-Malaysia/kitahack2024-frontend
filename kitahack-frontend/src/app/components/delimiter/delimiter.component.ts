import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDataDelimiter } from '../../types/blocks.type';

@Component({
  selector: 'app-delimiter',
  templateUrl: './delimiter.component.html',
  styleUrl: './delimiter.component.css'
})
export class DelimiterComponent {
  @Input() value: any
}

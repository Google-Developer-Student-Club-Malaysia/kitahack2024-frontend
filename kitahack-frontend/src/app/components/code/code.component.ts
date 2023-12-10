import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDataCode } from '../../types/blocks.type';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
  @Input() value: any



}


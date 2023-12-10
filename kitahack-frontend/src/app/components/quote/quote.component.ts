import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlignmentType, BlockDataQuote } from '../../types/blocks.type';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() value: any

  setAlignment() {
    switch (this.value.alignment) {
      case AlignmentType.LEFT:
        return "text-left"
      case AlignmentType.CENTER:
        return "text-center"
      case AlignmentType.RIGHT:
        return "text-right"
    }
    return "text-left"
  }

}


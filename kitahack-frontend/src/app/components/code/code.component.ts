import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
})
export class CodeComponent implements AfterViewInit {
  @ViewChild('codeEle') code!: ElementRef;
  @Input() value: any;

  constructor() {}

  ngAfterViewInit(): void {
    Prism.highlightAll(this.code.nativeElement);
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlockDataRaw } from '../../types/blocks.type';

@Component({
  selector: 'app-raw',
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.css',
})
export class RawComponent {
  raw: BlockDataRaw;

  constructor() {
    this.raw = {
      html: "<div>\n<p> Hello World</p>\n</div>"
    }

  }




}
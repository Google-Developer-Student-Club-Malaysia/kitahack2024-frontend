import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlockDataHeader } from '../../types/blocks.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() value: any
  headerStyle: String;

  constructor() {
    this.headerStyle = "text-3xl text-google-red-500 md:text-5xl lg:text-6xl dark:text-google-red-500";
  }
  getHeaderLevel() {
    switch (this.value.level) {
      case 2:
        this.headerStyle = "text-2xl text-google-blue-500 md:text-4xl lg:text-5xl dark:text-google-blue-500"
        break
      case 3:
        this.headerStyle = "text-xl text-google-yellow-500 md:text-3xl lg:text-4xl dark:text-google-yellow-500"
        break
      case 4:
        this.headerStyle = "text-lg text-google-green-500 md:text-2xl lg:text-3xl dark:text-google-green-500"
        break;
      case 5:
        this.headerStyle = "text-md text-gray-600 md:text-xl lg:text-2xl dark:text-gray-300";
        break;
      case 6:
        this.headerStyle = "text-sm text-black md:text-lg lg:text-2xl dark:text-white";
        break;
    }
    return this.headerStyle
  }


}

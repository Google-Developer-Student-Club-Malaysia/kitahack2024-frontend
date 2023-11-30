import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  @Input() isLeft : Boolean;
  @Input() bgColor : String;

  constructor(){
    this.isLeft = false;
    this.bgColor = "blue";
  }

  getComponentClass(){
    return {
      'common-style' :true,
      'left-chatbox' : this.isLeft,
      'right-chatbox' : !this.isLeft
    }
  }

  getTailClass(){
    return{
      'left-tail' : this.isLeft,
      'right-tail' : !this.isLeft
    }
  }

}

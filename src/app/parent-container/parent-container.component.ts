import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {
  titleFromParent = 'titleFromParent';
  inputFromParent(event, value){
    if(event.keyCode == 13) {
    this.titleFromParent = value;}
    else this.titleFromParent = 'Press Enter';
  }
  constructor() { }

  ngOnInit() {
  }

}

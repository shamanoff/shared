import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent implements OnInit {
  titleFromParent = 'Default Title From Parent';
  outputFromChild ='Default';
  inputFromParent(event, value) {
    // console.log('EVENT: ',event);
    if (event.keyCode == 13) {
      this.titleFromParent = value;
    }
    else this.titleFromParent;
  }

  handleChangesChildOutput(event){
  this.outputFromChild = event;
  }
  constructor() {
  }

  ngOnInit() {
  }

}

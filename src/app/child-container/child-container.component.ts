import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.scss']
})
export class ChildContainerComponent implements OnInit {

  @Input() titleFromChild = 'default';
  @Output() outputFromChild = new EventEmitter();

  inputFromChild(event, value){
    if (event.keyCode == 13) {
      this.outputFromChild.emit(value);
    }
    else this.outputFromChild;
  }

  constructor() { }

  ngOnInit() {
  }

}

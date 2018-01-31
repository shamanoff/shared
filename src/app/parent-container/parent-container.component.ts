import {Component} from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss']
})
export class ParentContainerComponent {
  titleFromParent = 'Default';
  outputHandledFromChild ='Default';
  inputFromParent(event, value) {
    if (event.keyCode == 13) {
      this.titleFromParent = value;
    }
  }

  handleChangesChildOutput(event){
  this.outputHandledFromChild = event;
  }

}

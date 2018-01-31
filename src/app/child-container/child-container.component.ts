import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.scss']
})
export class ChildContainerComponent implements OnInit {

  @Input() title = 'default';


  constructor() { }

  ngOnInit() {
  }

}

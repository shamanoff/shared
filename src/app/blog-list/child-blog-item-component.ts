import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-item-component',
    template: `
     <div>
        <h2>{{ blog.name }}</h2>
       <h4>id: {{blog.id}}</h4>
       <hr>
        <button  (click)="handleClick()" >Click Me</button>
    </div>
       `
})
export class ChildItemComponent {
    @Input()blog: any;
    @Output() blogClick = new EventEmitter();

    handleClick(){
      console.log('Child Blog Item');
      this.blogClick.emit('Emit!!!');
    }


}

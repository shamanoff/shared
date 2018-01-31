import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-blog-list',
  templateUrl: './parent-blog-list.component.html',
})
export class ParentBlogListComponent {

 blog1 = {
   id: 8768686,
   name: 'Wonder Blog is Here!'
 };

  handleEvenFromChild(data){
   console.log(data);
 }

}

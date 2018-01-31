import { ChildItemComponent } from './blog-list/child-blog-item-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentBlogListComponent } from './blog-list/parent-blog-list.component';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { ChildContainerComponent } from './child-container/child-container.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentBlogListComponent,
    ChildItemComponent,
    ParentContainerComponent,
    ChildContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

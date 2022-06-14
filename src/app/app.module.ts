import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importando forms module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    // importando forms module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

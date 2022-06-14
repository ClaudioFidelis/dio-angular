import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importando forms module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { replacePipe }  from  './pipe/replace.pipe'

@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent,
    // importando novos componentes
    StarComponent,
    replacePipe,
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

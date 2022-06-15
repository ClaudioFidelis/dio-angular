import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importando forms module
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { replacePipe }  from  './pipe/replace.pipe'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent,
    // importando novos componentes
    StarComponent,
    replacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    // importando forms module
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

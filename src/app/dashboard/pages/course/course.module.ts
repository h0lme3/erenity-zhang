import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    RouterModule
  ]
})
export class CourseModule { }

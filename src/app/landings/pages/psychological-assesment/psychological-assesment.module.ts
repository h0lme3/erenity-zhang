import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologicalAssesmentRoutingModule } from './psychological-assesment-routing.module';
import { PsychologicalAssesmentComponent } from './psychological-assesment.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    PsychologicalAssesmentComponent
  ],
  imports: [
    CommonModule,
    PsychologicalAssesmentRoutingModule,
    RouterModule
  ]
})
export class PsychologicalAssesmentModule { }

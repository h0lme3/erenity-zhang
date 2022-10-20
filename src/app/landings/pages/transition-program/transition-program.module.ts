import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionProgramRoutingModule } from './transition-program-routing.module';
import { TransitionProgramComponent } from './transition-program.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    TransitionProgramComponent
  ],
  imports: [
    CommonModule,
    TransitionProgramRoutingModule,
    RouterModule
  ]
})
export class TransitionProgramModule { }

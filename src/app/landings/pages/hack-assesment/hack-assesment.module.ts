import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackAssesmentRoutingModule } from './hack-assesment-routing.module';
import { HackAssesmentComponent } from './hack-assesment.component';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    HackAssesmentComponent
  ],
  imports: [
    CommonModule,
    HackAssesmentRoutingModule,
    RouterModule
  ]
})
export class HackAssesmentModule { }

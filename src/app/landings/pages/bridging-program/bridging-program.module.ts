import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridgingProgramRoutingModule } from './bridging-program-routing.module';
import { BridgingProgramComponent } from './bridging-program.component';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    BridgingProgramComponent
  ],
  imports: [
    CommonModule,
    BridgingProgramRoutingModule,
    RouterModule
  ]
})
export class BridgingProgramModule { }

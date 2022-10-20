import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictimProgramRoutingModule } from './victim-program-routing.module';
import { VictimProgramComponent } from './victim-program.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/modules/material/material.module';


@NgModule({
  declarations: [
    VictimProgramComponent
  ],
  imports: [
    CommonModule,
    VictimProgramRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class VictimProgramModule { }

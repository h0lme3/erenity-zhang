import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprogressRoutingModule } from './inprogress-routing.module';
import { InprogressComponent } from './inprogress.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    InprogressComponent
  ],
  imports: [
    CommonModule,
    InprogressRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class InprogressModule { }

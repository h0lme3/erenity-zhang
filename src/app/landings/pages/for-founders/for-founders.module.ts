import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForFoundersComponent } from './for-founders.component';
import {ForFoundersRoutingModule} from './for-founders-routing-module'
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from 'src/modules/material/material.module';
import {RouterModule} from "@angular/router"


@NgModule({
  declarations: [
    ForFoundersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ForFoundersRoutingModule,
    FlexLayoutModule
  ]
})
export class ForFoundersModule { }

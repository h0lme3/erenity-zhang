import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Template1RoutingModule } from './template1-routing.module';
import { Template1Component } from './template1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/modules/material/material.module';


@NgModule({
  declarations: [
    Template1Component
  ],
  imports: [
    CommonModule,
    Template1RoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class Template1Module { }

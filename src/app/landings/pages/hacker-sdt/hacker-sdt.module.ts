import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackerSdtRoutingModule } from './hacker-sdt-routing.module';
import { HackerSdtComponent } from './hacker-sdt.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdtQuestionBoxModule } from '../../shared/components/sdt-question-box/sdt-question-box.module';
import { ThankyouComponent } from './dialog/thankyou/thankyou.component';


@NgModule({
  declarations: [
    HackerSdtComponent,
    ThankyouComponent,
  ],
  imports: [
    CommonModule,
    HackerSdtRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SdtQuestionBoxModule
  ]
})
export class HackerSdtModule { }

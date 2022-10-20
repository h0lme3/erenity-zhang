import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SdtQuestionBoxModule } from '../../shared/components/sdt-question-box/sdt-question-box.module';


@NgModule({
  declarations: [
    SurveyComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SdtQuestionBoxModule
  ]
})
export class SurveyModule { }

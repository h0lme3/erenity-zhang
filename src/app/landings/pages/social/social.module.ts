import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social.component';
import {MaterialModule} from 'src/modules/material/material.module'

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdtQuestionBoxModule } from '../../shared/components/sdt-question-box/sdt-question-box.module';

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SdtQuestionBoxModule,
  ]
})
export class SocialModule { }

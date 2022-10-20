import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdtQuestionBoxComponent } from './sdt-question-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [SdtQuestionBoxComponent],
  exports: [SdtQuestionBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SdtQuestionBoxModule { }

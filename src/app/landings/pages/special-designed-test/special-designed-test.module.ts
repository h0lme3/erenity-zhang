import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialDesignedTestRoutingModule } from './special-designed-test-routing.module';
import { SpecialDesignedTestComponent } from './special-designed-test.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/modules/material/material.module';
import { NgxMatTelInputModule } from 'ngx-mat-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpecialDesignedTestComponent
  ],
  imports: [
    CommonModule,
    SpecialDesignedTestRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgxMatTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecialDesignedTestModule { }

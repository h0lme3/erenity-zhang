import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactusComponent } from './contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMatTelInputModule } from 'ngx-mat-tel-input';


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ContactusRoutingModule,
    FlexLayoutModule,
    NgxMatTelInputModule
  ]
})
export class ContactusModule { }

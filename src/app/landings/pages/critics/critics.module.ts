import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriticsRoutingModule } from './critics-routing-module';
import { CriticsComponent } from './critics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/modules/material/material.module';



@NgModule({
  declarations: [CriticsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    CriticsRoutingModule
  ]
})
export class CriticsModule { }

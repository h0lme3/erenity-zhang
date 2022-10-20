import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutyouRoutingModule } from './aboutyou-routing.module';
import { AboutyouComponent } from './aboutyou.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookConsultationComponent } from './components/book-consultation/book-consultation.component';


@NgModule({
  declarations: [
    AboutyouComponent,
    BookConsultationComponent
  ],
  imports: [
    CommonModule,
    AboutyouRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AboutyouModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { InprogressModule } from '../inprogress/inprogress.module';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImpactOfCyberDisruptComponent } from './components/impact-of-cyber-disrupt/impact-of-cyber-disrupt.component';
import { DigitalEconomyComponent } from './components/digital-economy/digital-economy.component';


@NgModule({
  declarations: [
    BlogComponent,
    ImpactOfCyberDisruptComponent,
    DigitalEconomyComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    InprogressModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BlogModule { }

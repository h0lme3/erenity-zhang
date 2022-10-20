import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutOurRelationShipRoutingModule } from './about-our-relation-ship-routing.module';
import { AboutOurRelationShipComponent } from './about-our-relation-ship.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkwithusComponent } from './components/workwithus/workwithus.component';


@NgModule({
  declarations: [
    AboutOurRelationShipComponent,
    WorkwithusComponent
  ],
  imports: [
    CommonModule,
    AboutOurRelationShipRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AboutOurRelationShipModule { }

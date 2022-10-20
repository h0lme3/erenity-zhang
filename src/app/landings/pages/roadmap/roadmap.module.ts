import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadmapRoutingModule } from './roadmap-routing.module';
import { RoadmapComponent } from './roadmap.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WhichareaComponent } from './components/whicharea/whicharea.component';


@NgModule({
  declarations: [
    RoadmapComponent,
    WhichareaComponent
  ],
  imports: [
    CommonModule,
    RoadmapRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class RoadmapModule { }

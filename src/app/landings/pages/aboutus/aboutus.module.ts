import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FirstProjectComponent } from './components/first-project/first-project.component';
import { EndabuseComponent } from './components/endabuse/endabuse.component';
import { Tier1OntologicalComponent } from './components/tier1-ontological/tier1-ontological.component';

@NgModule({
  declarations: [
    AboutusComponent,
    FirstProjectComponent,
    EndabuseComponent,
    Tier1OntologicalComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class AboutusModule { }

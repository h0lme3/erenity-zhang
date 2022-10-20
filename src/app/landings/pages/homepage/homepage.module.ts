import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { About2Component } from './components/about2/about2.component';

import { SurveyComponent } from './components/survey/survey.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/modules/material/material.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CoreClientComponent } from './components/core-client/core-client.component';
import { GainErenityComponent } from './components/gain-erenity/gain-erenity.component';
import { IntroComponent } from './components/intro/intro.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { Quote1Component } from './components/quote1/quote1.component';
import { Quote2Component } from './components/quote2/quote2.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { HopeComponent } from './components/hope/hope.component';
import { OnlineSecurityComponent } from './components/online-security/online-security.component';
import { RevolutionaryComponent } from './components/revolutionary/revolutionary.component';
import { HiringComponent } from './components/hiring/hiring.component';
import { JoynProductComponent } from './components/joyn-product/joyn-product.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    HomepageComponent,
    IntroComponent,
    AboutusComponent,
    About2Component,
    OurServiceComponent,
    Quote1Component,
    Quote2Component,
    SurveyComponent,
    GainErenityComponent,
    RoadmapComponent,
    CoreClientComponent,
    HopeComponent,
    OnlineSecurityComponent,
    RevolutionaryComponent,
    HiringComponent,
    JoynProductComponent, 
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class HomepageModule { }

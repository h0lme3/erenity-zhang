import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingsRoutingModule } from './landings-routing.module';
import { LandingsComponent } from './landings.component';
import { NavigationsComponent } from './shared/navigations/navigations.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/footer/footer.component';
import { Dialog } from './shared/dialog/dialog';
import { Subscribe } from './shared/dialog/subscribe/subscribe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessDialog } from './shared/dialog/successDialog/successDialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CenterMatmenuDirective } from './shared/navigations/center-matmenu.directive';
import { membershipDialog } from './shared/dialog/membershipDialog/membershipDialog';
import { AllDialog } from './shared/dialog/allDialog/allDialog';
import { ImproveDialog } from './shared/dialog/improveDialog/improveDialog';
import { CriticsDialog } from './shared/dialog/criticsDialog/criticsDialog';
import { P404Component } from './pages/p404-component/p404-component.component';
import { ChooseSectorComponent } from './dialog/choose-sector/choose-sector.component';


@NgModule({
  declarations: [
    NavigationsComponent,
    LandingsComponent,
    FooterComponent,
    Dialog,
    Subscribe,
    SuccessDialog,
    CenterMatmenuDirective,
    membershipDialog,
    AllDialog,
    ImproveDialog,
    CriticsDialog,
    P404Component,
    ChooseSectorComponent,
    
  ],
  imports: [
    CommonModule,
    LandingsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class LandingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {HomeModule} from './pages/home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { WelcomeComponent } from './dialog/welcome/welcome.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HomeModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOurProductComponent } from './view-our-product.component';
import { MaterialModule } from 'src/modules/material/material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewOurProductRoutingModule } from './view-our-product-routing.module';
import { IssuePostCovidComponent } from './components/issue-post-covid/issue-post-covid.component';
import {TranslateModule} from '@ngx-translate/core';
import { PostCovidRealityComponent } from './components/post-covid-reality/post-covid-reality.component';
import { PostCovidDemandComponent } from './components/post-covid-demand/post-covid-demand.component';
import { ErenityOffersComponent } from './components/erenity-offers/erenity-offers.component';
import { ErenityCommentsComponent } from './components/erenity-comments/erenity-comments.component';
import { ProductsComponent } from './components/products/products.component';
import { BussinesConsultantComponent } from './components/bussines-consultant/bussines-consultant.component';
import { PrivacyAdvocatesComponent } from './components/privacy-advocates/privacy-advocates.component';
import { SocialVictimsTechComponent } from './components/social-victims-tech/social-victims-tech.component';
import { AbusAndSecurityComponent } from './components/abus-and-security/abus-and-security.component';
import { TrustRecontructionComponent } from './components/trust-recontruction/trust-recontruction.component';
import { TrustRebuiltComponent } from './components/trust-rebuilt/trust-rebuilt.component';
import { TechTrustTommorowComponent } from './components/tech-trust-tommorow/tech-trust-tommorow.component';
import { SocialTechComponent } from './components/social-tech/social-tech.component';
import { EndAbuseComponent } from './components/end-abuse/end-abuse.component'


@NgModule({
  declarations: [ViewOurProductComponent, IssuePostCovidComponent, PostCovidRealityComponent, PostCovidDemandComponent, ErenityOffersComponent, ErenityCommentsComponent, ProductsComponent, BussinesConsultantComponent, PrivacyAdvocatesComponent, SocialVictimsTechComponent, AbusAndSecurityComponent, TrustRecontructionComponent, TrustRebuiltComponent, TechTrustTommorowComponent, SocialTechComponent, EndAbuseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ViewOurProductRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ViewOurProductModule { }

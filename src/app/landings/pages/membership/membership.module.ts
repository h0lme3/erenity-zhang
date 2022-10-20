import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GnLComponent } from './components/gn-l/gn-l.component';
import { JoineedBoardComponent } from './components/joineed-board/joineed-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    MembershipComponent,
    GnLComponent,
    JoineedBoardComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule
  ]
})
export class MembershipModule { }

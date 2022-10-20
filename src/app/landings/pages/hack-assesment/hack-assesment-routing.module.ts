import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HackAssesmentComponent} from './hack-assesment.component'

const routes: Routes = [{ path: '', component:  HackAssesmentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackAssesmentRoutingModule { }

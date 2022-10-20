import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsychologicalAssesmentComponent } from './psychological-assesment.component'

const routes: Routes = [{ path: '', component:  PsychologicalAssesmentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsychologicalAssesmentRoutingModule { }

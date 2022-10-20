import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransitionProgramComponent} from './transition-program.component'

const routes: Routes = [{ path: '', component:  TransitionProgramComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitionProgramRoutingModule { }

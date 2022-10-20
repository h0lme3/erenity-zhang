import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BridgingProgramComponent } from './bridging-program.component'

const routes: Routes = [{ path: '', component: BridgingProgramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BridgingProgramRoutingModule { }

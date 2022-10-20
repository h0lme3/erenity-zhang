import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InprogressComponent } from './inprogress.component';

const routes: Routes = [{ path: '', component: InprogressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InprogressRoutingModule { }

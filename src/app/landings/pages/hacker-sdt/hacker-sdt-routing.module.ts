import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerSdtComponent } from './hacker-sdt.component';

const routes: Routes = [{ path: '', component: HackerSdtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackerSdtRoutingModule { }

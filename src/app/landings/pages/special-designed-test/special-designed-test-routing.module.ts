import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialDesignedTestComponent } from './special-designed-test.component';

const routes: Routes = [{ path: '', component: SpecialDesignedTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialDesignedTestRoutingModule { }

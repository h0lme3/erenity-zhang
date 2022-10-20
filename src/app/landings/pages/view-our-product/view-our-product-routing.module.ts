import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOurProductComponent } from './view-our-product.component';

const routes: Routes = [{ path: '', component: ViewOurProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOurProductRoutingModule { }

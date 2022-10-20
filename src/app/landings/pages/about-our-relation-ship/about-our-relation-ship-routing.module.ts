import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutOurRelationShipComponent } from './about-our-relation-ship.component';
import { WorkwithusComponent } from './components/workwithus/workwithus.component';

const routes: Routes = [
  { path: '', component: AboutOurRelationShipComponent },
  { path: 'work-with-us', component: WorkwithusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutOurRelationShipRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { EndabuseComponent } from './components/endabuse/endabuse.component';
import { FirstProjectComponent } from './components/first-project/first-project.component';
import { Tier1OntologicalComponent } from './components/tier1-ontological/tier1-ontological.component';

const routes: Routes = [
  { path: '', component: AboutusComponent },
  { path: 'first-project', component: FirstProjectComponent },
  { path: 'endabuse-project', component: EndabuseComponent },
  { path: 'tier1-ontological', component: Tier1OntologicalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }

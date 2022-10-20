import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { DigitalEconomyComponent } from './components/digital-economy/digital-economy.component';
import { ImpactOfCyberDisruptComponent } from './components/impact-of-cyber-disrupt/impact-of-cyber-disrupt.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'digital-economy', component: DigitalEconomyComponent },
  { path: 'impact-of-cyber-disruption', component: ImpactOfCyberDisruptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

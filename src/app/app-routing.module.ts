import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { P404Component } from './landings/pages/p404-component/p404-component.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landings/landings.module').then(m => m.LandingsModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) , canActivate: [AuthGuard]},
  { path: '**', component: P404Component },
];

const config: ExtraOptions = {
  // useHash: environment.production ? false : true,
  useHash:  true,
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../guard/auth.guard';
import {DashboardComponent} from './dashboard.component';
import {CourseComponent} from "./pages/course/course.component";


const routes: Routes = [{
  path: '',
    component: DashboardComponent,
    children: [
      {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
      {path: 'admin-dashboard', loadChildren: () => import('./pages/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)},
      {path: 'course', loadChildren: () => import('./pages/course/course.module').then(m => m.CourseModule)},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

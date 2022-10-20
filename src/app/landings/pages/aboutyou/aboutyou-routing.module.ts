import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutyouComponent } from './aboutyou.component';
import { BookConsultationComponent } from './components/book-consultation/book-consultation.component';

const routes: Routes = [
  { path: '', component: AboutyouComponent },
  { path: 'book-consultation', component: BookConsultationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutyouRoutingModule { }

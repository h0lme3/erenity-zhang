import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GnLComponent } from './components/gn-l/gn-l.component';
import { JoineedBoardComponent } from './components/joineed-board/joineed-board.component';
import { MembershipComponent } from './membership.component';

const routes: Routes = [
  { path: '', component: MembershipComponent },
  { path: 'Gnl', component: GnLComponent },
  { path: 'joiner-board', component: JoineedBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }

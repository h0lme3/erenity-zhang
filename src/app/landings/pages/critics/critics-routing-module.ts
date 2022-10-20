import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriticsComponent } from './critics.component';


const routes: Routes = [{ path: '', component: CriticsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CriticsRoutingModule { }

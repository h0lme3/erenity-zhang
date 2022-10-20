import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForFoundersComponent } from './for-founders.component';


const routes: Routes = [{ path: '', component: ForFoundersComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForFoundersRoutingModule { }

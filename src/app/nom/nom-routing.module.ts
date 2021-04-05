import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomComponent } from './nom.component';

const routes: Routes = [{ path: '', component: NomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomRoutingModule { }

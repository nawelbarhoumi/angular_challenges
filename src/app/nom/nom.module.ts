import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NomRoutingModule } from './nom-routing.module';
import { NomComponent } from './nom.component';


@NgModule({
  declarations: [NomComponent],
  imports: [
    CommonModule,
    NomRoutingModule
  ]
})
export class NomModule { }

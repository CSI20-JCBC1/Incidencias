import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionIncidenciasRoutingModule } from './introduccion-incidencias-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias.component';




@NgModule({
  declarations: [
    IntroduccionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    IntroduccionIncidenciasRoutingModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class IntroduccionIncidenciasModule { }

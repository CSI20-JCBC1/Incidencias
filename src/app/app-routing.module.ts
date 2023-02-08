import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './vistas/bienvenido/bienvenido.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  { path: 'introduccionIncidencias', loadChildren: () => import('./modulos/introduccionIncidencias/introduccion-incidencias-routing.module').then(m => m.IntroduccionIncidenciasRoutingModule) },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperianceComponent } from './experiance/experiance.component';

const routes: Routes = [
  {
    path: '',
    component: ExperianceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperianceRoutingModule { }

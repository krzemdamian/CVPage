import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'home',
  loadChildren: './modules/home/home.module#HomeModule'
},
{
  path: 'experiance',
  loadChildren: './modules/experiance/experiance.module#ExperianceModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

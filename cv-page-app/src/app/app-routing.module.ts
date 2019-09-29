import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' },
  { path: 'skills', loadChildren: './modules/skills/skills.module#SkillsModule' },
  { path: 'experiance', loadChildren: './modules/experiance/experiance.module#ExperianceModule' },
  { path: 'education', loadChildren: './modules/education/education.module#EducationModule' },
  { path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule' },
  { path: 'contact', loadChildren: './modules/contact/contact.module#ContactModule' },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '*', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

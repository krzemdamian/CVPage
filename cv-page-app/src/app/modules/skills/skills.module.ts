import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkillsRoutingModule } from './skills-routing.module';
import { RatingModule } from 'primeng/rating';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    RatingModule,
    FormsModule
  ]
})
export class SkillsModule { }

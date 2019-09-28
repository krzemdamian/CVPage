import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education/education.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    CardModule,
  ]
})
export class EducationModule { }

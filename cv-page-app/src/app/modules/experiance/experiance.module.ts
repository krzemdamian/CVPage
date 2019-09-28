import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperianceComponent } from './experiance/experiance.component';
import { ExperianceRoutingModule } from './experiance-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from 'primeng/fieldset'


@NgModule({
  declarations: [ExperianceComponent],
  imports: [
    CommonModule,
    ExperianceRoutingModule,
    AccordionModule,
    FieldsetModule
  ]
})
export class ExperianceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperianceComponent } from './experiance/experiance.component';
import { ExperianceRoutingModule } from './experiance-routing.module';



@NgModule({
  declarations: [ExperianceComponent],
  imports: [
    CommonModule,
    ExperianceRoutingModule
  ]
})
export class ExperianceModule { }

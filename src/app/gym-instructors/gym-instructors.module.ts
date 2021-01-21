import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymInstructorsRoutingModule } from './gym-instructors-routing.module';
import { GymInstructorsComponent } from './gym-instructors.component';

@NgModule({
  declarations: [GymInstructorsComponent],
  imports: [
    CommonModule,
    GymInstructorsRoutingModule
  ]
})
export class GymInstructorsModule { }

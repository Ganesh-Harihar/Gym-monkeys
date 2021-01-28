import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StoryAboutUsComponent } from './story-about-us/story-about-us.component';
import { GymClassesComponent } from './gym-classes/gym-classes.component';
import { TrainersComponent } from './trainers/trainers.component';
import { GetTrainingComponent } from './get-training/get-training.component';
import { FooterBanerComponent } from './footer-baner/footer-baner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    StoryAboutUsComponent,
    GymClassesComponent,
    TrainersComponent,
    GetTrainingComponent,
    FooterBanerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    StoryAboutUsComponent,
    GymClassesComponent,
    TrainersComponent,
    GetTrainingComponent,
    FooterBanerComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }

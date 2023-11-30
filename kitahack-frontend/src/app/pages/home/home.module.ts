import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CountdownSectionComponent } from '../../components/countdown-section/countdown-section.component';
import { WhatiskitahackSectionComponent } from '../../components/what-is-kitahack-section/what-is-kitahack-section.component';
import { TeamFormationSectionComponent } from '../../components/team-formation-section/team-formation-section.component';
import { FAQsSectionComponent } from '../../components/faqs-section/faqs-section.component';
import { DetailsComponent } from '../../components/details/details.component';
import { ChatboxComponent } from '../../components/chatbox/chatbox.component';
import { HomeRoutingModule } from './home.routes';


@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CountdownSectionComponent,
    WhatiskitahackSectionComponent,
    TeamFormationSectionComponent,
    DetailsComponent,
    ChatboxComponent,
    FAQsSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

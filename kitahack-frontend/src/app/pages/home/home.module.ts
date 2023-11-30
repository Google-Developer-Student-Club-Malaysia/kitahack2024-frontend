import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';

// Components
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { CountdownSectionComponent } from '../../components/countdown-section/countdown-section.component';
import { DetailsComponent } from '../../components/details/details.component';
import { WhatiskitahackSectionComponent } from '../../components/what-is-kitahack-section/what-is-kitahack-section.component';
import { TeamFormationSectionComponent } from '../../components/team-formation-section/team-formation-section.component';
import { FAQsSectionComponent } from '../../components/faqs-section/faqs-section.component';
import { ChatboxComponent } from '../../components/chatbox/chatbox.component';
import { MentorComponent } from '../../components/mentor/mentor.component';
import { MentorsSectionComponent } from '../../components/mentors-section/mentors-section.component';
import { SubmissionCriteriaComponent } from '../../components/submission-criteria/submission-criteria.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CountdownSectionComponent,
    DetailsComponent,
    WhatiskitahackSectionComponent,
    TeamFormationSectionComponent,
    ChatboxComponent,
    MentorComponent,
    MentorsSectionComponent,
    FAQsSectionComponent,
    SubmissionCriteriaComponent
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

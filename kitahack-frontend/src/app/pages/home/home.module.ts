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
import { JudgingCriteriaSectionComponent } from '../../components/judging-criteria-section/judging-criteria-section.component';
import { ChatboxComponent } from '../../components/chatbox/chatbox.component';
import { MentorComponent } from '../../components/mentor/mentor.component';
import { MentorsSectionComponent } from '../../components/mentors-section/mentors-section.component';
import { ChapterComponent } from '../../components/chapter/chapter.component';
import { ChapterSectionComponent } from '../../components/chapter-section/chapter-section.component';
import { FAQsSectionComponent } from '../../components/faqs-section/faqs-section.component';

// Services
import { ChapterService } from '../../services/chapter.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CountdownSectionComponent,
    DetailsComponent,
    WhatiskitahackSectionComponent,
    TeamFormationSectionComponent,
    JudgingCriteriaSectionComponent,
    ChatboxComponent,
    MentorComponent,
    MentorsSectionComponent,
    ChapterComponent,
    ChapterSectionComponent,
    FAQsSectionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [ChapterService],
})
export class HomeModule {}

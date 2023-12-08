import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routes';

// Components
import { HomeComponent } from './home.component';
import { ChatboxComponent } from '../../components/chatbox/chatbox.component';
import { MentorComponent } from '../../components/mentor/mentor.component';
import { ChapterComponent } from '../../components/chapter/chapter.component';

// Sections
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { CountdownSectionComponent } from '../../sections/countdown-section/countdown-section.component';
import { WhatiskitahackSectionComponent } from '../../sections/what-is-kitahack-section/what-is-kitahack-section.component';
import { SdgSectionComponent } from '../../sections/sdg-section/sdg-section.component';
import { HowToJoinSectionComponent } from '../../sections/how-to-join-section/how-to-join-section.component';
import { TeamFormationSectionComponent } from '../../sections/team-formation-section/team-formation-section.component';
import { NormalNgoSectionComponent } from '../../sections/normal-ngo-section/normal-ngo-section.component';
import { JudgingCriteriaSectionComponent } from '../../sections/judging-criteria-section/judging-criteria-section.component';
import { SubmissionCriteriaSectionComponent } from '../../sections/submission-criteria-section/submission-criteria-section.component';
import { MentorsSectionComponent } from '../../sections/mentors-section/mentors-section.component';
import { ChapterSectionComponent } from '../../sections/chapter-section/chapter-section.component';
import { FAQsSectionComponent } from '../../sections/faqs-section/faqs-section.component';

// Services
import { ChapterService } from '../../services/chapter.service';

@NgModule({
  declarations: [
    HomeComponent,
    ChatboxComponent,
    MentorComponent,
    ChapterComponent,

    HeroSectionComponent,
    CountdownSectionComponent,
    WhatiskitahackSectionComponent,
    SdgSectionComponent,
    HowToJoinSectionComponent,
    TeamFormationSectionComponent,
    NormalNgoSectionComponent,
    JudgingCriteriaSectionComponent,
    SubmissionCriteriaSectionComponent,
    MentorsSectionComponent,
    ChapterSectionComponent,
    FAQsSectionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  providers: [ChapterService],
})
export class HomeModule {}

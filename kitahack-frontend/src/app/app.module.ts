import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TeamFormationSectionComponent } from './team-formation-section/team-formation-section.component';
import { DetailsComponent } from "./details/details.component";
import { ChatboxComponent } from './chatbox/chatbox.component';
import { JudgingCriteriaSectionComponent } from './judging-criteria-section/judging-criteria-section.component';
import { MentorsSectionComponent } from './mentors-section/mentors-section.component';

@NgModule({
    declarations: [DefaultLayoutComponent, AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroSectionComponent,
        TeamFormationSectionComponent,
        DetailsComponent,
        ChatboxComponent,
        JudgingCriteriaSectionComponent,
        MentorsSectionComponent,
    ]
})
export class AppModule {}

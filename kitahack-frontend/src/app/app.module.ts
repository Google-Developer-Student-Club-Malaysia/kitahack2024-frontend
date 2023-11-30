import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
<<<<<<< HEAD
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
=======

// Layouts
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DefaultLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
>>>>>>> f911b06653d6cc4b9b2e79df1cc70e6ee3374f72
})
export class AppModule {}

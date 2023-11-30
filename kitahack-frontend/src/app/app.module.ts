import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TeamFormationSectionComponent } from './team-formation-section/team-formation-section.component';
import { DetailsComponent } from './details/details.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FAQsSectionComponent } from './faqs-section/faqs-section.component';
import { FooterComponent } from './footer/footer.component';
import { CountdownSectionComponent } from './countdown-section/countdown-section.component';
import { WhatiskitahackSectionComponent } from './what-is-kitahack-section/what-is-kitahack-section.component';
import { NormalNgoSectionComponent } from './normal-ngo-section/normal-ngo-section.component';

@NgModule({
  declarations: [DefaultLayoutComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavbarComponent,
    HeroSectionComponent,
    CountdownSectionComponent,
    WhatiskitahackSectionComponent,
    TeamFormationSectionComponent,
    DetailsComponent,
    ChatboxComponent,
    FAQsSectionComponent,
    FooterComponent,
    NormalNgoSectionComponent
  ],
})
export class AppModule {}

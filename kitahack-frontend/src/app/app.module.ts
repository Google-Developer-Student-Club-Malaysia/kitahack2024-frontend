import { NgModule } from '@angular/core';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TeamFormationSectionComponent } from './team-formation-section/team-formation-section.component';
import { DetailsComponent } from "./details/details.component";
import { ChatboxComponent } from './chatbox/chatbox.component';

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
        ChatboxComponent
    ]
})
export class AppModule {}

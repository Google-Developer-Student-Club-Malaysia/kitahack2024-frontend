import { NgModule } from "@angular/core";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroSectionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

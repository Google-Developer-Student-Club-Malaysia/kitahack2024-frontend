import { NgModule } from "@angular/core";
import { DefaultLayoutComponent } from "./layouts/default-layout/default-layout.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

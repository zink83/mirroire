import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockModule } from "app/clock/clock.module";
import { NewsReaderComponent } from './news-reader/news-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsReaderComponent
  ],
  imports: [
    BrowserModule,
    ClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RadialClockComponent } from './radial-clock/radial-clock.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [RadialClockComponent],
  exports:[RadialClockComponent],
  providers: [{provide: LOCALE_ID, useValue: "fr"},
      DatePipe
    ]
})
export class ClockModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeroComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

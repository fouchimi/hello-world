import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';


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
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

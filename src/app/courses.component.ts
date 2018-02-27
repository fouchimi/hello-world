import { Component } from '@angular/core';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'courses',
   template: `<h2>{{ title }}</h2><br/>
                <ul *ngFor="let course of courses">
                  <li>{{ course }}</li>
                </ul>`
})
export class CoursesComponent {
    title = 'List of courses';
    courses = [ 'course1', 'course2', 'course3' ];
}

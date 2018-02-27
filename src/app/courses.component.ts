import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'courses',
   template: `<h2>{{ title }}</h2><br/>
                <ul *ngFor="let course of courses">
                  <li>{{ course }}</li>
                </ul>
                <button class="btn btn-primary" [class.active]="isActive">Save</button>`
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = true;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}

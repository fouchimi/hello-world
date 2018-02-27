import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
   // tslint:disable-next-line:component-selector
   selector: 'courses',
   template: `<h2>{{ title }}</h2><br/>
                <ul *ngFor="let course of courses">
                  <li>{{ course }}</li>
                </ul>
                <div (click)="divWasClicked()">
                   <button (click)="onSave($event)" class="btn btn-primary">Save</button>
                </div><br/>
                <div>
                   <input type="text" placeholder="Enter text here" (keyup.enter)="onKeyUp()" />
                </div>`
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = false;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    divWasClicked() {
        console.log('Div was clicked');
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('The button was clicked ' + $event);
    }

    onKeyUp() {
        console.log('You press the Enter key!');
    }
}

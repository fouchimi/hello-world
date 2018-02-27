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
                   <p><span>{{ firstName }}</span></p>
                   <input type="text" #email placeholder="Enter text here" (keyup.enter)="onKeyUp(email.value)" />
                   <input type="text" [value]="name" placeholder="Enter text here" (keyup.enter)="name = $event.target.value; onPress()" />
                   <input type="text" [(ngModel)]="firstName" (keyup.enter)="onSubmit()" />
                </div>`
})
export class CoursesComponent {
    private name = 'ousmanefouchimi@gmail.com';
    private firstName = 'Fouchimi';
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

    onKeyUp(email) {
        console.log('You press the Enter key!');
        console.log(email);
    }

    onPress() {
        console.log(this.name);
    }

    onSubmit() {
        console.log(this.firstName);
    }

}

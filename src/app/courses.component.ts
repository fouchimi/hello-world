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
                </div>
                <p>
                  <span>{{ currentCourse.title | uppercase }}</span><br/>
                  <span>{{ currentCourse.rating | number:'1.2-2' }}</span><br/>
                  <span>{{ currentCourse.students | number }}</span><br/>
                  <span>{{ currentCourse.price | currency:'AUD':true:'2.2-2' }}</span><br/>
                  <span>{{ currentCourse.date | date:'shortDate' }}</span>
                </p>`
})
export class CoursesComponent {
    private name = 'ousmanefouchimi@gmail.com';
    private firstName = 'Fouchimi';
    title = 'List of courses';
    courses;
    currentCourse = {
        title : 'The best Angular course ',
        rating : 4.8947,
        students : 40751,
        price : 10.00,
        date : new Date(2016, 3, 1)
    };
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

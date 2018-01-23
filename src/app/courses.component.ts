import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',                // <div id="courses"> "courses"
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <!--
        <img [src]="imageUrl" alt="Image not found"/>
        -->
        <table [border] = "1">
            <tr>
                <td [attr.colspan] = "colSpan">this</td>
            </tr>
        </table>

        <button class="btn btn-primary" [class.active] = "isActive" [style.backgroundColor] = "isActive ? 'red' : 'green'"> Submit</button>
        
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Click Me</button>
        </div>

        <div>
            <input (keyup) = "onKeyUp($event)"> 
            <br/>
            <input #email (keyup.enter) = "onKeyUp1(email.value)">
            <br/>
            <input [value] = "mymail" (keyup.enter) = "mymail = $event.target.value; onKeyData()">
            <br/>
            <input [(ngModel)] = "mymail" (keyup.enter) = "onKeyData()">

        </div>
        <br/>
        <div>
        {{myCourses.title | uppercase}} <br/>
        {{myCourses.students | number}} <br/>
        {{myCourses.rating | number:'1.2-2'}} <br/>
        {{myCourses.price | currency:'INR'}} <br/>
        {{myCourses.releaseDate | date:'shortDate'}} <br/>
        </div>

        <br/>
        {{ text | summary:10 }}
        <br>

        <span (click)="onStarClick()"  class= 'glyphicon {{ icon }} ' ></span>
        <br/>
        <div>
            <input [(ngModel)] = "myText" (keyup) = "onKeyPress($event)" >
            <br/>
            <p> {{ resultText }} </p>
        </div>
    `
})  



export class CoursesComponent {
    title = "List of courses";
    imageUrl = "e:/smilies.jpeg";
    colSpan = 2;
    isActive = false;
    courses;

    myText;
    resultText;
    onKeyPress($event) {
        this.myText = $event.target.value; 
        this.resultText = (this.myText).split();
        // console.log(this.myText);
    }

    //icon Demo
    icon = "glyphicon-star";
    onStarClick() {
        this.icon = (this.icon === "glyphicon-star") ? "glyphicon-star-empty" : "glyphicon-star";
    }

    text = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;

    myCourses = {
        title:"The complete angular course",
        rating: 4.975,
        students: 30123,
        price:190.95,
        releaseDate:new Date(2016, 3, 1)
    }

    mymail = "ex@example.com";

    onKeyData() {
        console.log(this.mymail);
    }

    onKeyUp($event) {
        if( $event.keyCode === 13)
            console.log("Enter key was pressed.", $event.target.value);
    }

    onKeyUp1(email){
        console.log(email);
    }

    onDivClicked() {
        console.log("Div was clicked.");
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button Clicked.", $event);
        alert("You hitted.");
    }

    

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
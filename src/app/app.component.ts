import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // tweet = {
  //   body: '...',
  //   likesCount: 10,
  //   isLiked: true
  // }

  // onFavoriteChanged(eventArgs : FavoriteChangedEventArgs) {
  //   console.log("Favorite Changed : " + eventArgs); 
  // }

  courses;

  loadCourses() {
    this.courses = [
      { id : 1, name: 'Course1' },
      { id : 2, name: 'Course2' },
      { id : 3, name: 'Course3' }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  // viewMode = "other";

  // onAdd() {
  //   this.courses.push({id : 4, name: 'Course4'});
  // }

  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course) {
  //   course.name = "Updated";
  // }
}

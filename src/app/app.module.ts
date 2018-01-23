import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app.error.handler';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GithubFollowersService } from './services/github-followers.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    PostsComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { 
      //   path: '',
      //   component: HomeComponent
      // },
      // { 
      //   path: 'followers/:id/:username',
      //   component: GithubProfileComponent
      // },
      // { 
      //   path: 'followers',
      //   component: GithubFollowersComponent
      // },
      // { 
      //   path: 'posts',
      //   component: PostsComponent
      // },
      // { 
      //   path: '**',
      //   component: NotFoundComponent
      // }
      { path: '', component: HomeComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

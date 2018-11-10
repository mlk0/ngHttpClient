import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { PostsComponent } from './posts/posts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JsonPlaceHoldService } from './services/json-place-hold.service';
import { CastedPostsComponent } from './casted-posts/casted-posts.component';
import { FullResponsePostsComponent } from './full-response-posts/full-response-posts.component';
import { PostsWithErrorHandlingComponent } from './posts-with-error-handling/posts-with-error-handling.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
   declarations: [
      AppComponent,
      PostsComponent,
      WelcomeComponent,
      CastedPostsComponent,
      FullResponsePostsComponent,
      PostsWithErrorHandlingComponent,
      PostCommentsComponent,
      AlbumsComponent,
      PhotosComponent,
      TodosComponent,
      UsersComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
      { path : 'posts', component : PostsComponent },
      { path : 'comments', component : PostCommentsComponent },
      { path : 'photos', component : PhotosComponent },
      { path : 'todos', component : TodosComponent },
      { path : 'users', component : UsersComponent },
      { path : 'albums', component : AlbumsComponent },
      { path : 'casted-posts', component : CastedPostsComponent },
      { path : 'full-response-posts', component : FullResponsePostsComponent },
      { path : 'posts-error-handling', component : PostsWithErrorHandlingComponent},
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ]),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HttpClient, JsonPlaceHoldService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

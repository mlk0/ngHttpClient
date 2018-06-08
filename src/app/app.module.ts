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
import { CrudPostComponent } from './crud-post/crud-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    WelcomeComponent,
    CastedPostsComponent,
    FullResponsePostsComponent,
    PostsWithErrorHandlingComponent,
    CrudPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'posts', component : PostsComponent },
      { path : 'casted-posts', component : CastedPostsComponent },
      { path : 'full-response-posts', component : FullResponsePostsComponent },
      { path : 'posts-error-handling', component : PostsWithErrorHandlingComponent},
     { path : 'crud-posts', component : CrudPostComponent},
      
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ]),
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [HttpClient, JsonPlaceHoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }

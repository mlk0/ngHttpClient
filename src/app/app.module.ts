import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { PostsComponent } from './posts/posts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JsonPlaceHoldService } from './services/json-place-hold.service';
import { CastedPostsComponent } from './casted-posts/casted-posts.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    WelcomeComponent,
    CastedPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'posts', component : PostsComponent },
      { path : 'casted-posts', component : CastedPostsComponent },
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ]),
    HttpClientModule
  ],
  providers: [HttpClient, JsonPlaceHoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }

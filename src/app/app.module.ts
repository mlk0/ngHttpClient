import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { PostsComponent } from './posts/posts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { JsonPlaceHoldService } from './services/json-place-hold.service';
import { AngularFontAwesomeModule } from "angular-font-awesome";
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'posts', component : PostsComponent },
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ]),
    HttpClientModule,AngularFontAwesomeModule
  ],
  providers: [HttpClient, JsonPlaceHoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }

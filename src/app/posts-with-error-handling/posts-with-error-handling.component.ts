import { Component, OnInit } from '@angular/core';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { IPost } from '../models/i-post';

@Component({
  selector: 'app-posts-with-error-handling',
  templateUrl: './posts-with-error-handling.component.html',
  styleUrls: ['./posts-with-error-handling.component.css']
})
export class PostsWithErrorHandlingComponent implements OnInit {

  errorMessage: any;
  posts: IPost[];
  constructor(private jsonService : JsonPlaceHoldService) { }

  ngOnInit() {
  }

  getPosts(){

     this.jsonService.getPostsWithHandlingError().subscribe(data=>{
       this.posts = [... data];
     },
    
    error=>{
      this.errorMessage = error;
    })

  }

}

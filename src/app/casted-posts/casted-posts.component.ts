import { Component, OnInit } from '@angular/core';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { IPost, IPostX } from '../models/i-post';
import { delay } from 'rxjs/operators'

@Component({
  selector: 'app-casted-posts',
  templateUrl: './casted-posts.component.html',
  styleUrls: ['./casted-posts.component.css']
})
export class CastedPostsComponent implements OnInit {

  
  isLoading: boolean;
  posts: IPost[];
  postsX: IPostX[];

  
  constructor(private jsonService: JsonPlaceHoldService) { }

  ngOnInit() {
  }

  getCastedPosts() {
    this.isLoading = true;
    this.jsonService.getPostsTyped().pipe(delay(3000))
    
    .subscribe(p => {
    this.posts = [...p]  //usage of the spread operator to clone the array
      this.isLoading = false;
    }

    )
  }


  getCastedPostsX(){
    this.isLoading = true;

    this.jsonService.getPostsTypedX().subscribe(
      r=>{
        this.isLoading = false;
        this.postsX = r;
      }
    );
  }


}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators'
// import 'rxjs/operator/delay'
// import 'rxjs/operators/delay'

import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
  posts$: Observable<any>;

  postsIDsandTitles: Object[];


  constructor(
    private jsonService: JsonPlaceHoldService
  ) { }


  ngOnInit() {
    this.posts$ = this.jsonService.getPosts().pipe(delay(5000));

  }

  getPostsIdAndTitle() {
   this.postSubscription = this.jsonService.getPosts().subscribe(s => {

      let posts = [];
      //if we knot that s is and array
      (<Object[]>s).forEach(i => {
        let p = {
          PostId: i["id"],
          PostTitle: i["title"]
        }
        posts.push(p);
      });

      this.postsIDsandTitles = posts;
    }

    )
  }

}

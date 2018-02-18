import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {delay} from 'rxjs/operators'
// import 'rxjs/operator/delay'
// import 'rxjs/operators/delay'
 
import { JsonPlaceHoldService } from '../services/json-place-hold.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<any>;
  constructor(
    private jsonService : JsonPlaceHoldService
  ) { }


  ngOnInit() {
     this.posts$ = this.jsonService.getPosts().pipe(delay(5000));

  }

}

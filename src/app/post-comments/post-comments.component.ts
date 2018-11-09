import { Component, OnInit } from '@angular/core';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { Observable } from 'rxjs';
import { PostComment } from '../models';

@Component({
  selector: 'post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
 
  comments$: Observable<PostComment[]>; 

  constructor(private service: JsonPlaceHoldService) { }

  ngOnInit() {
    this.comments$ = this.service.getComments();
  }

}

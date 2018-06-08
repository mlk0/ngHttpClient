import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { IPost } from '../models/i-post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-crud-post',
  templateUrl: './crud-post.component.html',
  styleUrls: ['./crud-post.component.css']
})
export class CrudPostComponent implements OnInit {

  posts$: Observable<IPost[]>;
  post: IPost;
  newPost: Object;
  fg: FormGroup;
  constructor(private formBuilder : FormBuilder, private jsonService : JsonPlaceHoldService) { 
    
    this.fg = this.formBuilder.group({});
    let fcTitle = this.formBuilder.control('', Validators.compose([Validators.required, , Validators.minLength(3), Validators.maxLength(16)]));
    let fcBody = this.formBuilder.control('', Validators.compose([Validators.required, Validators.maxLength(128)]));
    this.fg.addControl('title',fcTitle);
    this.fg.addControl('body',fcBody);
    this.fg.addControl('id', this.formBuilder.control(0));
    this.fg.addControl('userId', this.formBuilder.control(0));
    
  }

  ngOnInit() {
  this.posts$ = this.jsonService.getPostsTyped();
  return false;
  }


  editPost(post : IPost){
    console.log(post);
    this.fg.setValue(post);
  }
  
  formSubmit(formValue : any){
    console.log(formValue);
    let newPost : IPost = {
      title : formValue['title'],
      body : formValue['body'],
      userId : formValue['userId'],
      id : formValue['id']
    };

    if(newPost.id == 0){
      this.jsonService.createPost(newPost).subscribe(
        r=> this.post = r,
        e=> console.log(e)   
      );
    }
    else{
      this.jsonService.updatePost(newPost).subscribe(r=>{
        this.post = r;
        console.log('received from the server');
        console.log(r)
      }, e=>console.log(e));
    }
  }

  deletePost(id : FormControl)  {
    console.log(id.value + 'to be deleted');
    console.log(id.value)
    this.jsonService.deletePost(id.value).subscribe(
      r=>{
        console.log(`post with id : ${id.value} was deleted`);
        console.log(r);
      }, e=>console.log(e)
    );
    
  }

}

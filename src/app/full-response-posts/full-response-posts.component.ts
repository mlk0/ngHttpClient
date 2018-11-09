import { Component, OnInit } from '@angular/core';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { IPost } from '../models/i-post';

@Component({
  selector: 'app-full-response-posts',
  templateUrl: './full-response-posts.component.html',
  styleUrls: ['./full-response-posts.component.css']
})
export class FullResponsePostsComponent implements OnInit {

  responseBody: IPost[];
  headerKeysWithValues: { "key": string; "value": string; }[];
  responseStatusCode: number;

  postSubscription$: Observable<HttpResponse<IPost[]>>;

  constructor(private jsonService : JsonPlaceHoldService) { }

  ngOnInit() {
  }

  getPostsFullTyped(){
   this.postSubscription$   = 
    this.jsonService.getPostsTypedAsFullResponse();
  }

  
  getPostsFullTypedReadHeadersStatusAndBody(){
    
     this.jsonService.getPostsTypedAsFullResponse().subscribe(
      httpResponse => {

        //check the status
        this.responseStatusCode = httpResponse.status;

        let httpHeaders : HttpHeaders = httpResponse.headers;

        

        let headerKeys : string[] = httpHeaders.keys();
        this.headerKeysWithValues = headerKeys.map(k=>{
          let headerKeyAndValue = { "key" : k , "value" : httpHeaders.get(k) };
          console.log(headerKeyAndValue);
          return headerKeyAndValue;
        });

        this.responseBody = [ ... httpResponse.body ]; 


       }
     );
   }
 
   

}

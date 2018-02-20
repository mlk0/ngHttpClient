import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IPost, IPostX } from '../models/i-post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonPlaceHoldService {

 
  constructor(private httpClient : HttpClient) { }
  url : string = 'https://jsonplaceholder.typicode.com';
  
  
  getPosts(){

    let url = [this.url, 'posts'].join('/');
    return this.httpClient.get(url);

  }


  getPostsTyped(){

    let url = [this.url, 'posts'].join('/');
    
    //will return Observable of IPost instance in an array
    let posts$ = this.httpClient.get<IPost[]>(url);
    return posts$;

  }


  getPostsTypedX(): Observable<IPostX[]> {
    let url = [this.url, 'posts'].join('/');
    return this.httpClient.get<IPostX[]>(url);
  }


  getPostsTypedAsFullResponse() : Observable<HttpResponse<IPost[]>>  {
    let url = [this.url, 'posts'].join('/');
    
    let result = this.httpClient.get<IPost[]>(url, { observe : 'response' });
    
    return result;
  }

}

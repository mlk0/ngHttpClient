import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JsonPlaceHoldService {

  constructor(private httpClient : HttpClient) { }
  url : string = 'https://jsonplaceholder.typicode.com';
  getPosts(){
    let url = [this.url, 'posts'].join('/');
    return this.httpClient.get(url);
  }

}

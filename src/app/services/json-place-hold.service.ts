import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IPost, IPostX } from '../models/i-post';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JsonPlaceHoldService {


  constructor(private httpClient: HttpClient) { }
  url: string = 'https://jsonplaceholder.typicode.com';


  getPosts() {

    let url = [this.url, 'posts'].join('/');
    return this.httpClient.get(url);

  }


  getPostsTyped() {

    let url = [this.url, 'posts'].join('/');

    //will return Observable of IPost instance in an array
    let posts$ = this.httpClient.get<IPost[]>(url);
    return posts$;

  }


  getPostsTypedX(): Observable<IPostX[]> {
    let url = [this.url, 'posts'].join('/');
    return this.httpClient.get<IPostX[]>(url);
  }


  getPostsTypedAsFullResponse(): Observable<HttpResponse<IPost[]>> {
    let url = [this.url, 'posts'].join('/');

    let result = this.httpClient.get<IPost[]>(url, { observe: 'response' });

    return result;
  }



  handleError(error: HttpErrorResponse) {


    console.log(error);


    if (error.error instanceof ErrorEvent) {
      console.log('CLIENT SIDE Error ' + error.error.message);
    }
    else {
      console.log('SERVER SIDE Error status ' + error.status);
      console.log('server error body ' + error.error);
    }

    return new ErrorObservable('Something went wrong ...  Please try again later');

  }


  getPostsWithHandlingError(): Observable<IPost[]> {

    //let url = [this.url, 'posts'].join('/');

    let result = this.httpClient.get<IPost[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
    return result;

  }


}

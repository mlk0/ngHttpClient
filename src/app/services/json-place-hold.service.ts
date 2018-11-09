import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IPost, IPostX } from '../models/i-post';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PostComment } from '../models/post-comment';
import { Album, Photo, Todo, User } from '../models';


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
      // console.log(`server error body ${JSON.stringify(error.error)}`);
    }

    //it seems that ErrorObservable is no loger supported
    // ErrorObservable returns ErrorObservable<{}> while throwError returns Observable<never>
    //return new ErrorObservable('Something went wrong ...  Please try again later');
    return throwError('Something went wrong ...  Please try again later');

  }


  getPostsWithHandlingError(): Observable<IPost[]> {

    //let url = [this.url, 'posts'].join('/');

    //the passed url is incorrect and will provide error
    let result = this.httpClient.get<IPost[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
    return result;

  }



  getComments(): Observable<PostComment[]> {

    let url = [this.url, 'comments'].join('/');
    
    let result = this.httpClient.get<PostComment[]>(url)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }



  getAlbums(): Observable<Album[]> {

    let url = [this.url, 'albums'].join('/');
    
    let result = this.httpClient.get<Album[]>(url)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }

  getPhotos(): Observable<Photo[]> {
    let url = [this.url, 'photos'].join('/');
    
    let result = this.httpClient.get<Photo[]>(url)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }


  getTodos(): Observable<Todo[]> {
    let url = [this.url, 'todos'].join('/');
    
    let result = this.httpClient.get<Todo[]>(url)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }


  getUsers(): Observable<User[]> {
    let url = [this.url, 'users'].join('/');
    
    let result = this.httpClient.get<User[]>(url)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }

}

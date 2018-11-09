import { Component, OnInit } from '@angular/core';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { Observable } from 'rxjs';
import { Photo } from '../models';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos$: Observable<Photo[]>; 

  constructor(private service: JsonPlaceHoldService) { }

  ngOnInit() {
    this.photos$ = this.service.getPhotos();
  }
}

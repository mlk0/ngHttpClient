import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { Observable } from 'rxjs';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>; 

  constructor(private service: JsonPlaceHoldService) { }

  ngOnInit() {
    this.albums$ = this.service.getAlbums();
  }

}

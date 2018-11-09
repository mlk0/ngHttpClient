import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { Observable } from 'rxjs';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>; 

  constructor(private service: JsonPlaceHoldService) { }

  ngOnInit() {
    this.users$ = this.service.getUsers();
  }

}

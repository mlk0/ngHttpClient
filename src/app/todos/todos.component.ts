import { Component, OnInit } from '@angular/core';
import { Todo } from '../models';
import { JsonPlaceHoldService } from '../services/json-place-hold.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>; 

  constructor(private service: JsonPlaceHoldService) { }

  ngOnInit() {
    this.todos$ = this.service.getTodos();
  }

}

import { Component, inject, signal } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = signal<Todo | undefined>(undefined);
  http = inject(HttpClient);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/' + this.route.snapshot.paramMap.get('id'))
      .subscribe(data => this.todo.set(data));
  }
}

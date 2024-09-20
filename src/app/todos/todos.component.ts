import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  http = inject(HttpClient);
  todos = signal<Todo[]>([]);

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map(todos => todos.slice(0, 10)))
      .subscribe(data => this.todos.set(data));
  }
}

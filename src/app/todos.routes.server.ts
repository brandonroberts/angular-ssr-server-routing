import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RenderMode, ServerRoute, } from '@angular/ssr';

import { lastValueFrom, map } from 'rxjs';

export const todoServerRoutes: ServerRoute[] = [
  { path: 'todos', renderMode: RenderMode.Prerender },
  {
    path: 'todos/:id', renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const http = inject(HttpClient);
      const todos = await lastValueFrom(http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
        .pipe(map(todos => todos.slice(0, 10))))

      return todos.map(todo => ({ id: todo.id }));
    }
  },
];

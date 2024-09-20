import { Routes } from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: ':id', component: TodoComponent },
];

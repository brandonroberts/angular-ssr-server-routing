import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./about-me/about-me.component') },
  { path: 'todos', loadChildren: () => import('./todos.routes').then(m => m.routes) },
];

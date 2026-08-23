import { Routes } from '@angular/router';

/**
 * Alle Seiten werden lazy geladen – die Startseite lädt dadurch nur
 * das, was sie wirklich braucht.
 */
export const routes: Routes = [
  {
    path: '',
    title: 'Aldin Musliu – Applikationsentwicklung',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'skills',
    title: 'Skills – Aldin Musliu',
    loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'projekte',
    title: 'Projekte – Aldin Musliu',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  { path: '**', redirectTo: '' },
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterComponent } from './components/router/router.component';


const routes: Routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: '', loadChildren: './auth#AuthModule' },
      { path: 'router', component: RouterComponent, },
      { path: 'not-found', component: NotFoundComponent, },
    ]
  },
  {
    path: '',
    children: [
      { path: 'dashboard', loadChildren: './dashboard#DashboardModule'}
    ]
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

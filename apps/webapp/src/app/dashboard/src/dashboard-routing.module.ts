import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { IndexComponent } from './components/index.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Dashboard' },
    children: [
      {
        path: '',
        component: IndexComponent,
        children: [
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', component: DashboardComponent, },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

export const routedComponents = [DashboardComponent];

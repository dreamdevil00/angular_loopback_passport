import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard.component';
import { IndexComponent } from './components/index.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    IndexComponent,
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule { }

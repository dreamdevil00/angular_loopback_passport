import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard.component';
import { IndexComponent } from './components/index.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    IndexComponent,
  ],
  providers: [],
})
export class DashboardModule { }

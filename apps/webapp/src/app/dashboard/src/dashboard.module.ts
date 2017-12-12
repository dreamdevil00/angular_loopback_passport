import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard.component';
import { IndexComponent } from './components/index.component';

@NgModule({
  imports: [
    CommonModule,
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

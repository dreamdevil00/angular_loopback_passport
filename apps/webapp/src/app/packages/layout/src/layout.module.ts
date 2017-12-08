import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FullLayoutComponent } from './components/containers/full-layout.component';
import { SimpleLayoutComponent } from './components/containers/simple-layout.component';

const components = [
  FullLayoutComponent,
  SimpleLayoutComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class LayoutModule { }

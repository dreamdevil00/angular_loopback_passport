import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Modules
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';

import { LayoutModule } from './packages/layout';

// Local Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterComponent } from './components/router/router.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

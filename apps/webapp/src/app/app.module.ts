import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Third Party Modules
import { LoopBackConfig, SDKBrowserModule } from './packages/api-sdk';

// Local Modules
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';

import { LayoutModule } from './packages/layout';

// Local Components && Services
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterComponent } from './components/router/router.component';

import { AuthService } from './packages/auth-sdk';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RouterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    LayoutModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const baseUrl = (window as any).config.baseUrl;
    LoopBackConfig.setBaseURL(baseUrl);
    LoopBackConfig.filterOnUrl();
  }
}

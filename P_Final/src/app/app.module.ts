import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogAPComponent } from './components/log-ap/log-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogAPComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

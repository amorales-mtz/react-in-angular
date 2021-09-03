import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactWrapperComponent } from 'src/app/components/ReactWrapperComponent';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ReactWrapperComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

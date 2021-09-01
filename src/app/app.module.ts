import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactWrapperComponent } from 'src/app/components/ReactWrapperComponent';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ReactWrapperComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

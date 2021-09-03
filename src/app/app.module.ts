import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactWrapperComponent } from 'src/app/components/ReactWrapperComponent';
import { DashLoaderComponent } from './dash/dash-loader/dash-loader.component';

import { ScriptService } from './services/script.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ReactWrapperComponent,
    DashLoaderComponent
  ],
  providers: [
    ScriptService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

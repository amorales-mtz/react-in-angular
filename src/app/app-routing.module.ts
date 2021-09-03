import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashLoaderComponent } from './dash/dash-loader/dash-loader.component';

const routes: Routes = [
  { path: 'dash', component: DashLoaderComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        useHash: true,
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

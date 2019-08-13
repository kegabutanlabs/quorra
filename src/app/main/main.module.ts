import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PagesModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    MainRoutingModule
  ]
})
export class MainModule { }

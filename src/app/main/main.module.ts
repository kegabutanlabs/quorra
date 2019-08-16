import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages/pages.module';
import { AsideModule } from './aside/aside.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PagesModule,
    SharedModule,
    AsideModule
  ],
  exports: [
    MainComponent,
    MainRoutingModule,
    PagesModule,
    SharedModule,
    AsideModule
  ]
})
export class MainModule { }

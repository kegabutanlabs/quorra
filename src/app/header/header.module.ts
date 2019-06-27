import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MainRoutingModule } from '../main/main-routing.module';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    MainRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

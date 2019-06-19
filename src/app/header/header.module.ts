import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

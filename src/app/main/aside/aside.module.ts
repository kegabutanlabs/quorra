import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AsideComponent,
    SharedModule
  ]
})
export class AsideModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    AdsenseModule.forRoot(environment.app.adsense)
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }

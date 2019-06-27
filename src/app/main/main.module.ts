import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdsenseModule } from 'ng2-adsense';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [
    MainComponent,
    PostComponent,
    PostListComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'YOUR-ADSENSE-CLIENT',
      adSlot: 177013,
    })
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

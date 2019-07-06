import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdsenseModule } from 'ng2-adsense';
import { DisqusModule } from "ngx-disqus";
import { environment } from '../../environments/environment';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AsideComponent } from './aside/aside.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [
    MainComponent,
    PostComponent,
    PostListComponent,
    AsideComponent,
    RefreshComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    AdsenseModule.forRoot(environment.app.adsense),
    DisqusModule.forRoot('kegabutandotcom')
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

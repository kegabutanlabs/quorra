import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AsideComponent } from './aside/aside.component';
import { RefreshComponent } from './refresh/refresh.component';
import { StripHtmlPipe } from '../pipes/strip-html-pipe';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from 'src/environments/environment';
import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    AsideComponent,
    RefreshComponent,
    StripHtmlPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    AdsenseModule.forRoot(environment.app.adsense),
    DisqusModule.forRoot('kegabutandotcom')
  ],
  exports: [
    PostComponent,
    PostListComponent,
    AsideComponent,
    RefreshComponent,
    StripHtmlPipe,
    HttpClientModule,
    AdsenseModule,
    DisqusModule
  ]
})
export class SharedModule { }

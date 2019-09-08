import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { RefreshComponent } from './refresh/refresh.component';
import { StripHtmlPipe } from '../pipes/strip-html-pipe';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { AdsenseModule } from 'ng2-adsense';
import { environment } from 'src/environments/environment';
import { DisqusModule } from 'ngx-disqus';
import { PostCardOverlayComponent } from './post-card-overlay/post-card-overlay.component';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    RefreshComponent,
    StripHtmlPipe,
    PostCardOverlayComponent
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
    RefreshComponent,
    PostCardOverlayComponent,
    StripHtmlPipe,
    HttpClientModule,
    AdsenseModule,
    DisqusModule
  ]
})
export class SharedModule { }

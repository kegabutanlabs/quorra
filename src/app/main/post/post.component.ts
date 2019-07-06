import { Component, ViewEncapsulation,OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { MetaService, PostService, PostUrlService } from '../services';
import { PostItemResponse, ErrorResponse } from '../services/response.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private meta: MetaService,
    private location: Location,
    private postService: PostService,
    private postUrlService: PostUrlService,
    private domSanitizer: DomSanitizer
  ) { }

  private subscription: Subscription = new Subscription();

  urlParam: string;
  postData: PostItemResponse;
  postContent: any;
  post$: Observable<PostItemResponse>;
  pageId: string;

  ngOnInit() {
    this.subscription.add(
      this.activatedRoute.paramMap
      .subscribe(params => {
        this.urlParam = params.get('id');
        this.pageId = `/post/${this.urlParam}`;
        this.post$ = this.postService.retrievePostByUrl(this.urlParam, false);
      })
    );

    this.subscription.add(
      this.post$.subscribe((data: PostItemResponse) => {
        let postUrl = this.postUrlService.resolvePostUrl(data.title, data.id);
        if (this.urlParam !== postUrl) {
          this.location.replaceState(`/post/${postUrl}`);
        }
        this.postData = data;
        this.postContent = this.domSanitizer.bypassSecurityTrustHtml(data.content);
        this.meta.setMetaData({
          title: data.title,
          keywords: data.title,
          url: document.location.href
        })
      }, error => {
        if (error.status !== 0) {
          this.router.navigate(['/not-found']);
        } else {
          console.log(error);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { MetaService, PostService, PostUrlService } from '../../services';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostItemResponse } from '../../services/response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private postService: PostService,
    private postUrlService: PostUrlService,
    private domSanitizer: DomSanitizer
  ) {
  }

  urlParam: string;
  postData: PostItemResponse;
  postContent: SafeHtml;
  post$: Observable<PostItemResponse>;
  pageId: string;

  fetchPostData(url: string) {
    this.post$ = this.postService.retrievePostByUrl(url, true);

    return this.post$.subscribe((data: PostItemResponse) => {
      const postUrl = this.postUrlService.resolvePostUrl(data.title, data.id);
      if (this.urlParam !== postUrl) {
        this.location.replaceState(`/post/${postUrl}`);
      }
      this.postData = data;
      this.postContent = this.domSanitizer.bypassSecurityTrustHtml(data.content);
    }, error => {
      if (error.status !== 0) {
        this.router.navigate(['/not-found']);
      } else {
        console.log(error);
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.firstChild.paramMap
    .subscribe(params => {
      this.urlParam = params.get('id');
      this.pageId = `/post/${this.urlParam}`;
      this.fetchPostData(this.urlParam);
    });
  }

  ngOnDestroy() {
  }
}

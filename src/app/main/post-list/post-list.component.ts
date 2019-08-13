import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { PostService } from '../services/post.service';
import { PostUrlService } from '../services/post-url.service';
import { PostListResponse, PostItemResponse } from '../services/response.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(
    public postService: PostService,
    public postUrlService: PostUrlService
  ) { }

  private subscription: Subscription;

  posts: PostListResponse;
  post$: Observable<PostListResponse> = this.postService.retrievePosts(5, true);

  ngOnInit() {
    this.subscription = this.post$.subscribe((data: PostListResponse) => {
      this.posts = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

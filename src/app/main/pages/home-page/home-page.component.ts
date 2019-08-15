import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostListResponse } from '../../services/response.interface';
import { PostService } from '../../services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(
    public postService: PostService
  ) { }

  private subscription: Subscription;
  postData: any;
  post$: Observable<PostListResponse> = this.postService.retrievePosts(5, true);

  ngOnInit() {
    this.subscription = this.post$.subscribe((data: any) => {
      this.postData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

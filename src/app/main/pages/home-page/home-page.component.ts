import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PostListResponse } from '../../services/response.interface';
import { PostService, MetaService } from '../../services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(
    public postService: PostService,
    private meta: MetaService
  ) { }

  private subscription: Subscription;
  postData: any;
  post$: Observable<PostListResponse> = this.postService.retrievePosts(5, true);

  ngOnInit() {
    this.subscription = this.post$.subscribe((data: any) => {
      this.postData = data;
    });

    this.meta.setMetaData({
      title: 'Kegabutan.com - Home',
      keywords: 'Kegabutan.com, membuat kegabutan menjadi berfaedah',
      description: 'Membuat kegabutan menjadi berfaedah!',
      url: document.location.href,
      imageUrl: document.location.href + 'assets/images/Kegabutan_Logo_BluePink.png'
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

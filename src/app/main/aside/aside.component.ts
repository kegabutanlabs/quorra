import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services';
import { Subscription, Observable } from 'rxjs';
import { PostSearchResponse } from '../services/response.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {

  constructor(
    public postService: PostService
  ) { }

  private subscription: Subscription;
  postData: any;
  post$: Observable<PostSearchResponse> = this.postService.searchPost('anime', false);

  ngOnInit() {
    this.subscription = this.post$.subscribe((data: any) => {
      this.postData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

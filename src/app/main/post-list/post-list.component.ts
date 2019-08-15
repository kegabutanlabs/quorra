import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

import { PostUrlService } from '../services';
import { PostListResponse } from '../services/response.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy, OnChanges {

  constructor(
    public postUrlService: PostUrlService
  ) { }

  @Input() posts: PostListResponse;

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "posts" changed
    if (changes.posts) {
        this.posts = this.posts;
    }
  }

  ngOnDestroy() { }
}

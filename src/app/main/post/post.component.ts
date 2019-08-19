import { Component, ViewEncapsulation, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { MetaService } from '../services';
import { PostItemResponse } from '../services/response.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges {

  constructor(private meta: MetaService) { }

  @Input() postData: PostItemResponse;
  @Input() postContent: SafeHtml;
  @Input() pageId: string;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.postData) {
        this.postData = this.postData;
        if (this.postData) {
          this.meta.setMetaData({
            title: this.postData.title,
            keywords: this.postData.title,
            url: document.location.href,
            imageUrl: this.postData.images[0].url
          });
        }
    }
  }
}

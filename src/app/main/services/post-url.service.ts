import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostUrlService {

  constructor() { }

  resolvePostId(postUrl: string): string {
    let urlArray = postUrl.split('-');
    let postId = urlArray[urlArray.length - 1];
    return postId;
  }

  resolvePostUrl(title: string, id: string): string {
    title = title.replace(/[^a-zA-Z0-9]+/g, '-');
    let postUrl = title.split(' ');
    postUrl.push(id);
    return postUrl.join('-').replace(/-+/g, '-').toLowerCase();
  }
}

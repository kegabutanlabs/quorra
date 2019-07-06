import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { retry } from 'rxjs/operators';
import * as path from 'path-browserify';

import { environment } from '../../../environments/environment';
import { PostUrlService } from './post-url.service';
import { PostListResponse, PostItemResponse } from './response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private postUrl: PostUrlService
  ) {
    this.assembleConfig();
  }

  apiEndpoint: string;
  apiKey: string = environment.app.API_KEY;

  private assembleConfig() {
    let apiUrl = environment.app.API_URL;
    let apiEndpoint = environment.app.API_ENDPOINTS.post;
    let blogId = environment.app.BLOG_ID;

    this.apiEndpoint = path.join(apiUrl, `/blogs/${blogId}/${apiEndpoint}`);
  }

  retrievePosts(maxResults: number, fetchBodies?: boolean): Observable<PostListResponse> {
    let bodies = (typeof fetchBodies === 'undefined') ? true : fetchBodies;
    let paramOptions = {
      params: new HttpParams()
              .set('maxResults', maxResults.toString())
              .set('prettyPrint', 'false')
              .set('fetchBodies', bodies.toString())
              .set('fetchImages', 'true')
              .set('key', this.apiKey)
    }

    return this.http.get<PostListResponse>(this.apiEndpoint, paramOptions)
      .pipe(
        retry(3)
      );
  }

  retrievePostByUrl(url: string, fetchBodies?: boolean): Observable<PostItemResponse> {
    let postId = this.postUrl.resolvePostId(url);
    let apiEndpoint = path.join(this.apiEndpoint, postId);
    let bodies = (typeof fetchBodies === 'undefined') ? true : fetchBodies;
    let paramOptions = {
      params: new HttpParams()
              .set('prettyPrint', 'false')
              .set('fetchBodies', bodies.toString())
              .set('fetchImages', 'true')
              .set('key', this.apiKey)
    }

    return this.http.get<PostItemResponse>(apiEndpoint, paramOptions)
      .pipe(
        retry(3)
      );
  }
}

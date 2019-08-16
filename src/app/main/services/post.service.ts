import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { PostUrlService } from './post-url.service';
import { PostListResponse, PostItemResponse, PostSearchResponse } from './response.interface';

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
    const apiUrl = environment.app.API_URL;
    const apiEndpoint = environment.app.API_ENDPOINTS.post;
    const blogId = environment.app.BLOG_ID;

    this.apiEndpoint = `${apiUrl}blogs/${blogId}/${apiEndpoint}`;
  }

  retrievePosts(
    maxResults: number,
    fetchBodies?: boolean,
    labels?: Array<string>,
    orderBy?: string
  ): Observable<PostListResponse> {
    const bodies = (typeof fetchBodies === 'undefined') ? true : fetchBodies;
    const postLabels = (typeof labels === 'undefined') ? [] : labels;
    const paramOptions = {
      params: new HttpParams()
              .set('maxResults', maxResults.toString())
              .set('prettyPrint', 'false')
              .set('fetchBodies', bodies.toString())
              .set('fetchImages', 'true')
              .set('key', this.apiKey)
              .set('labels', postLabels.join(','))
              .set('orderBy', orderBy ? orderBy : 'published')
    };

    return this.http.get<PostListResponse>(this.apiEndpoint, paramOptions)
      .pipe(
        retry(3)
      );
  }

  retrievePostByUrl(url: string, fetchBodies?: boolean): Observable<PostItemResponse> {
    const postId = this.postUrl.resolvePostId(url);
    const apiEndpoint = `${this.apiEndpoint}/${postId}`;
    const bodies = (typeof fetchBodies === 'undefined') ? true : fetchBodies;
    const paramOptions = {
      params: new HttpParams()
              .set('prettyPrint', 'false')
              .set('fetchBodies', bodies.toString())
              .set('fetchImages', 'true')
              .set('key', this.apiKey)
    };

    return this.http.get<PostItemResponse>(apiEndpoint, paramOptions)
      .pipe(
        retry(3)
      );
  }

  searchPost(query: string, fetchBodies?: boolean, orderBy?: string): Observable<PostSearchResponse> {
    const apiEndpoint = `${this.apiEndpoint}/search`;
    const bodies = (typeof fetchBodies === 'undefined') ? true : fetchBodies;
    const paramOptions = {
      params: new HttpParams()
              .set('q', query)
              .set('prettyPrint', 'false')
              .set('fetchBodies', bodies.toString())
              .set('orderBy', orderBy ? orderBy : 'published')
              .set('key', this.apiKey)
    };

    return this.http.get<PostSearchResponse>(apiEndpoint, paramOptions)
      .pipe(
        retry(3)
      );
  }
}

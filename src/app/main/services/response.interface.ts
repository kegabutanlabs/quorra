export interface ErrorResponse {
  error: object;
}

export interface PostListResponse {
  kind: string;
  nextPageToken: string;
  item: Array<any>;
  eTag: string;
}

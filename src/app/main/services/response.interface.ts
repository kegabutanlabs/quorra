export interface ErrorResponse {
  error: {
    errors: Array<object>,
    code: number,
    message: string
  };
}

export interface PostListResponse {
  kind: string;
  nextPageToken: string;
  items: Array<any>;
  eTag: string;
}

export interface PostItemResponse {
  kind: string;
  id: string;
  blog: {
    id: string
  };
  published: string;
  updated: string;
  etag: string;
  url: string;
  title: string;
  content?: string;
  images?: Array<object>;
  author: {
    id: string;
    displayName: string;
    url: string;
    image: {
      url: string;
    };
  };
  labels: Array<string>;
}

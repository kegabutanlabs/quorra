import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  setMetaData(data: MetaData) {
    this.title.setTitle(data.title);

    this.meta.updateTag({ 'name': 'keywords', 'content': data.keywords });
    this.meta.updateTag({ 'name': 'description', 'content': data.description });
    this.meta.updateTag({ 'name': 'twitter:card', 'content': 'summary_large_image' });
    this.meta.updateTag({ 'name': 'twitter:title', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:text:title', 'content': data.title });
    this.meta.updateTag({ 'name': 'twitter:description', 'content': data.description });
    this.meta.updateTag({ 'name': 'twitter:image', 'content': data.imageUrl });
    this.meta.updateTag({ 'name': 'twitter:image:alt', 'content': data.title });
    this.meta.updateTag({ 'property': 'og:title', 'content' : data.title });
    this.meta.updateTag({ 'property': 'og:url', 'content': data.url });
    this.meta.updateTag({ 'property': 'og:image', 'content': data.imageUrl });
    this.meta.updateTag({ 'property': 'og:image:alt', 'content': data.title });
    this.meta.updateTag({ 'property': 'og:description', 'content': data.description });
  }
}

interface MetaData {
  title: string;
  keywords?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
}

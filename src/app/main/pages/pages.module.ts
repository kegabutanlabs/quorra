import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';
import { ItemPageComponent } from './item-page/item-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AsideModule } from '../aside/aside.module';

@NgModule({
  declarations: [
    ItemPageComponent,
    HomePageComponent,
    SearchPageComponent,
    PostPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AsideModule
  ],
  exports: [
    ItemPageComponent,
    HomePageComponent,
    SearchPageComponent,
    PostPageComponent,
    AboutPageComponent,
    ContactPageComponent
  ]
})
export class PagesModule { }

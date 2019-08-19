import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'post',
    component: PostPageComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: ':id', component: PostComponent }
    ]
  },
  {
    path: 'category/:name',
    component: SearchPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

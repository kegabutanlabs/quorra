import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdsenseModule } from 'ng2-adsense';

import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { MainRoutingModule } from './main/main-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    HeaderModule,
    MainModule,
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-9305328163038270',
      adSlot: 4536593384,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

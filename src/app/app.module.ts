import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';


import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    NavbarComponent,
    CribCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

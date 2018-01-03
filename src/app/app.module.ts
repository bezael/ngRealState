import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RouterModule, Routes } from '@angular/router';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './components/add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by/sort-by.pipe';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'signin',     component: SignInComponent },
  { path: 'register',  component: RegisterUserComponent },
  { path: 'contact',  component: ContactPageComponent },
  { path: 'blog',  component: BlogPageComponent },
  {path: 'about', component: AboutPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    NavbarComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe,
    HeroSectionComponent,
    SignInComponent,
    RegisterUserComponent,
    ContactPageComponent,
    BlogPageComponent,
    AboutPageComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: true }  
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

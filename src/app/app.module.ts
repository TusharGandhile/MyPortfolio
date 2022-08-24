import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ordio/home/home.component';
import { AboutComponent } from './ordio/about/about.component';
import { PortfolioComponent } from './ordio/portfolio/portfolio.component';
import { ServiceComponent } from './ordio/service/service.component';
import { BlogComponent } from './ordio/blog/blog.component';
import { ContactComponent } from './ordio/contact/contact.component';
import { NavbarComponent } from './ordio/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from "swiper/angular";
import { UserFormDetailsComponent } from './user-form-details/user-form-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    UserFormDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

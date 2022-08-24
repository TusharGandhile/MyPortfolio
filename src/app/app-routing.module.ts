import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './ordio/about/about.component';
import { BlogComponent } from './ordio/blog/blog.component';
import { ContactComponent } from './ordio/contact/contact.component';
import { HomeComponent } from './ordio/home/home.component';
import { PortfolioComponent } from './ordio/portfolio/portfolio.component';
import { ServiceComponent } from './ordio/service/service.component';
import { UserFormDetailsComponent } from './user-form-details/user-form-details.component';

const routes: Routes = [
  {path:"",component:UserFormDetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"blog",component:BlogComponent},
  {path:"contact",component:ContactComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

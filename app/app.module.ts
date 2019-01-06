import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { CommentComponent } from './comment/comment.component';

const routes : Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'product',
    component: ProductComponent,
    children:[
      {
        path:'reviews/:product',
        component: ProductReviewsComponent
      }
    ]
  },
  {
    path:'product/:product',
    component: ProductDetailsComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SideBarComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductReviewsComponent,
    CommentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

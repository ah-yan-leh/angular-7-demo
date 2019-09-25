import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

import { faChild,faEye,faSmileBeam,faKissWinkHeart,faSun,faHeart,faStar,faStarHalf  } from '@fortawesome/free-solid-svg-icons';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TopicsComponent } from './topics/topics.component';
import { ArticleComponent } from './blog/article/article.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { CommonSkinConditionsComponent } from './common-skin-conditions/common-skin-conditions.component';
import { CommonSkinCondDetailComponent } from './common-skin-cond-detail/common-skin-cond-detail.component';
import { ProductTypeComponent } from './product-type/product-type.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    JumbotronComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductDetailComponent,
    TopicsComponent,
    ArticleComponent,
    ArticleListComponent,
    CommonSkinConditionsComponent,
    CommonSkinCondDetailComponent,
    ProductTypeComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faChild,faEye,faSmileBeam,faKissWinkHeart,faSun,faHeart,faStar,faStarHalf);
  }
 }

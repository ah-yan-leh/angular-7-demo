import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
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
import { CommonSkinConditionsComponent } from './common-skin-conditions/common-skin-conditions.component';
import { CommonSkinCondDetailComponent } from './common-skin-cond-detail/common-skin-cond-detail.component';
import { ProductTypeComponent } from './product-type/product-type.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'common-skin-conditions', component: CommonSkinConditionsComponent },
  { path: 'common-skin-conditions/:id', component: CommonSkinCondDetailComponent },
  { path: 'contact-me', component: ContactUsComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'product-type/:id', component: ProductTypeComponent },
  { path: 'product-list/:id', component: ProductListComponent },
  { path: 'product-list-detail/:id', component: ProductDetailComponent },
  { path: 'about-me', component: AboutUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  ]
})
export class AppRoutingModule { }

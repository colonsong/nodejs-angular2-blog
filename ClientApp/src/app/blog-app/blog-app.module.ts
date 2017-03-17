import { CategoryService } from './../service/category.service';
import { NgModule }      from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { BlogAppComponent } from './blog-app.component';

import { CommonModule }  from '@angular/common';

import { HttpModule } from '@angular/http';
import { ArticleService } from '../service/article.service';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { HeaderComponent } from './header/header.component';
import { RecentArticleComponent } from './recent-article/recent-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { FooterComponent } from './footer/footer.component';

import { ROUTER_CONFIG } from './blog-app.routes';
import { CategorysComponent } from './categorys/categorys.component';
import { Ng2PaginationModule } from 'ng2-pagination';


@NgModule({
  imports:      [ 
    CommonModule,
    HttpModule,
    RouterModule.forChild(ROUTER_CONFIG),
    Ng2PaginationModule
  ],
  declarations: [  
    BlogAppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ArticleListComponent, 
    BlogIndexComponent,
    HeaderComponent, 
    RecentArticleComponent,
    SearchArticleComponent, 
    FooterComponent, CategorysComponent, 
  ],
  providers: [ArticleService,
  CategoryService],
})

export class BlogAppModule {}
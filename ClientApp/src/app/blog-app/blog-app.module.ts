import { BlogAppComponent } from './blog-app.component';

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule }      from '@angular/core';
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


@NgModule({
  imports:      [ 
    CommonModule,
    HttpModule,
    RouterModule.forChild(ROUTER_CONFIG)
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
    FooterComponent, 
  ],
  providers: [ArticleService],
})

export class BlogAppModule {}
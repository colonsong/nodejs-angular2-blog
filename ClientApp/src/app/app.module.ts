import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './service/article.service';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AppRoutingModule }     from './app-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { HeaderComponent } from './header/header.component';
import { RecentArticleComponent } from './recent-article/recent-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';
import { FooterComponent } from './footer/footer.component';
import './rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, ArticleComponent, ArticleDetailComponent, ArticleListComponent, BlogIndexComponent,
   HeaderComponent, RecentArticleComponent, SearchArticleComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ArticleService]
})
export class AppModule { }

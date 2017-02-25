import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ArticleService } from './service/article.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{ 
  name = 'Angular';
  blogNmae = '滴一滴水 With Angular2';
  articles:any[];
  constructor(private articleService: ArticleService) {
    
  }

  ngOnInit(): void {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }
 }

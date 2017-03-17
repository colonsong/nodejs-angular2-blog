import { Article } from './../../service/article.model';

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-recent-article',
  templateUrl: './recent-article.component.html',
  styleUrls: ['./recent-article.component.css']
})
export class RecentArticleComponent implements OnInit {

articles:any;
  constructor(private articleService: ArticleService) {
    
  }

  ngOnInit(): void {
    this.articleService.getArticles(1).then(articles => this.articles = articles.data);
  }
}

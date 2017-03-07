import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles:any[];
  constructor(private articleService: ArticleService) {
    
  }

  ngOnInit(): void {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }

}

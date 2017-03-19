import { ArticlePager } from './../../service/articlePager.model';
import { CategoryService } from './../../service/category.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any;
  total:number;
  p: number = 1;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page:number) {
    var isCategoryPage = (this.activatedRoute.snapshot.url[0] && this.activatedRoute.snapshot.url[0].path === 'category') ? true : false;
    if (isCategoryPage) {
      this.getCategoryArticlesPage(page);
    } else {
      this.getArticlesPage(page);
    }
  }

  getCategoryArticlesPage(page: number) {
    this.p = page;
    this.activatedRoute.params
        .switchMap((params: Params) => this.categoryService.getCategoryArticles(params['name'], this.p))
        .subscribe(articles =>  {
          this.articles = articles.data;
          this.total = articles.count;
        });
  }

  getArticlesPage(page: number) {
    this.p = page;
    this.articleService.getArticles(page).then(articles =>  {
         this.articles = articles.data;
         this.total = articles.count;
        });
  }

}

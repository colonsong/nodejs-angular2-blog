import { CategoryService } from './../../service/category.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles:any[];
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit(): void {
       console.log('ngOnInit');
    var isCategoryPage = (this.activatedRoute.snapshot.url[0] && this.activatedRoute.snapshot.url[0].path === 'category') ? true : false;
    if (isCategoryPage) {
      console.log('category page');
      this.categoryService.getCategoryArticles(this.activatedRoute.snapshot.url[1].path).then(articles => this.articles = articles);
    } else {
      console.log('article page');
      this.articleService.getArticles().then(articles => this.articles = articles);
    }
  }

  ngAfterViewInit():void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck():void {
    console.log('ngDoCheck');
    
  }

  ngAfterContentInit	():void {
    console.log('ngAfterContentInit	');
  }
  ngAfterViewChecked	():void {
    console.log('ngAfterViewChecked	');
  }

    ngAfterContentChecked	():void {
    console.log('ngAfterContentChecked	');
  }


  




}

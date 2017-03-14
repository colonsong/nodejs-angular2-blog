import { Component, OnInit } from '@angular/core';
import { ArticleSearchService } from '../../service/article-search.service';
import { Observable  }        from 'rxjs/Observable';
import { Article }           from '../../service/article.model';
import { Router }            from '@angular/router';
import { Subject }           from 'rxjs/Subject';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css'],
  providers :[ArticleSearchService],
})
export class SearchArticleComponent implements OnInit {
  articles: Observable <Article[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private articleSearchService: ArticleSearchService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.articles = this.searchTerms
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term
    ? this.articleSearchService.search(term)
    : Observable.of<Article[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Article[]>([]);
    });
  }

  gotoArticleDetail(article: Article): void {
      let link = ['/blog/article-detail', article.id];
      this.router.navigate(link);
  }

  search(term: string):void {
    this.searchTerms.next(term);

  }

}

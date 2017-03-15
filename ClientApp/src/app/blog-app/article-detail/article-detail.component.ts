import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component'; 
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article:any;
  constructor(private articleService: ArticleService,private route: ActivatedRoute) {}

  ngOnInit(): void {
     this.route.params
       .switchMap((params: Params) => this.articleService.getArticleById(+params['id']))
       .subscribe(article => this.article = article[0]);
    
  }

}

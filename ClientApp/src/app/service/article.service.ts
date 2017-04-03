import { ArticlePager } from './articlePager.model';
import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class ArticleService {

    constructor(private http:Http) {};
    private articleUrl = 'http://'+ environment.host +':3000/api/articles/';

    getArticles(page:number) : Promise<ArticlePager>{
        return this.http.get(this.articleUrl + page)
        .toPromise()
        .then(value =>  value.json().success as ArticlePager)
        .catch(this.handleError);
    }

    getArticleById(id: number) : Promise<Article[]>{
        return this.http.get(this.articleUrl+'id/'+id)
        .toPromise()
        .then(value =>  value.json().success as Article[])
        .catch(this.handleError);
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
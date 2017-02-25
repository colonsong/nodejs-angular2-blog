import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

    constructor(private http:Http) {};
    private articleUrl = 'http://localhost:3000/api/articles/';

    getArticles() : Promise<Article[]>{
        return this.http.get(this.articleUrl)
        .toPromise()
        .then(value =>  value.json().success as Article[])
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
import { ArticlePager } from './articlePager.model';
import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class ArticleService {

    constructor(private http:Http) {};
    private articleUrl = 'http://'+ environment.host +':3000/api/articles/';
    private corsHost = environment.corsHost + 'angular_api/';

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

    addArticle(postParams:any) : Promise<any>{
        
        let options = new RequestOptions({  withCredentials: true });
        let params = new URLSearchParams();
        
        postParams.hide = postParams.hide ? 1 :0;
        params.set('title', postParams.title);
        params.set('classify', postParams.classify);
        params.set('hide', postParams.hide);
        params.set('tags', postParams.tags);
        params.set('elm1', postParams.elm1);
        
        console.log(params.toString()) // name=huge
        return this.http.post(this.corsHost + 'addArticle/', params, options )
        .toPromise()
        .then(value =>  value.json())
        .catch(this.handleError);
    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
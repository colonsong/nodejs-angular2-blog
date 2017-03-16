import { Category } from './category.model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from './article.model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';


@Injectable()
export class CategoryService {

    private articleUrl = 'http://'+ environment.APIURL +':3000/api/categorys/';

    constructor(private http: Http) {}

    getCategorys() : Promise<Category[]>{
        return this.http.get(this.articleUrl)
        .toPromise()
        .then(value =>  value.json().success as Category[])
        .catch(this.handleError);
    }

    getCategoryArticles(name) : Promise<Article[]>{
        return this.http.get(this.articleUrl+'articles/'+name)
        .toPromise()
        .then(value =>  value.json().success as Article[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Article }           from './article.model';

@Injectable()
export class HeroSearchService {

  private articleUrl = 'http://localhost:3000/api/searchArticles/';

  constructor(private http: Http) {}

  search(term: string): Observable<Article[]> {
    return this.http
               .get(this.articleUrl + `?term=${term}`)
               .map((r: Response) => r.json().data as Article[]);
  }
}

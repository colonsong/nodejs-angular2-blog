import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
declare var CryptoJS: any;

@Injectable()
export class FlickrService {
    private baseUrl = 'http://'+ environment.host +':3000/api/flickr/';
    constructor(private http:Http) {};
    

     testLogin() : Promise<any> {

        return this.http.get(this.baseUrl)
        .toPromise()
        .then(value =>  value.json().success)
        .catch(this.handleError);
     }

    photoSetGetList() : Promise<any>{
        return this.http.get(this.baseUrl )
        .toPromise()
        .then(value =>  value.json().success )
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
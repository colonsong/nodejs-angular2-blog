import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {

    constructor(private http:Http) {};
    private url = environment.corsHost + 'angular_api/login';
    
    login(passwd:string) : Promise<any>{
        let options = new RequestOptions({  withCredentials: true });
        let params = new URLSearchParams();
        params.set('passwd', passwd);
        console.log(params.toString()) // name=huge
        return this.http.post(this.url, params, options )
        .toPromise()
        .then(value =>  value.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
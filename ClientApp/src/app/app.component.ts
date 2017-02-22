import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { 
  name = 'Angular';
  blogNmae = '滴一滴水 With Angular2';
  data:any[];
  constructor(private http: Http) {
    http.get('http://localhost:3000/api/articles/')
      .subscribe(value => {
        this.data = value.json();
        console.log(this.data);
      });

  }
 }

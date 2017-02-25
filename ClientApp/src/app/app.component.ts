import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ArticleService } from './service/article.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent{ 
  name = 'Angular';
  blogNmae = '滴一滴水 With Angular2';
  
 }

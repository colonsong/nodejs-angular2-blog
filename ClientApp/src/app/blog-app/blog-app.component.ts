import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ArticleService } from '../service/article.service';


@Component({
  selector: 'app-blog-app',
  templateUrl: './blog-app.component.html',
  styleUrls: ['./blog-app.component.css']
})
export class BlogAppComponent implements OnInit {
  name = 'Angular';
  blogNmae = '滴一滴水 With Angular2';
  constructor() { }

  ngOnInit() {
  }

}

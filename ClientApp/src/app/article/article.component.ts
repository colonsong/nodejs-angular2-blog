import { Input } from '@angular/core/src/metadata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input() article: any;
  


  constructor() { }

  ngOnInit() {
  }

}

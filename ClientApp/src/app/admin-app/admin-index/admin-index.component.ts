import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../../service/article.service';
import { CategoryService } from '../../service/category.service';
@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {
  articleResponse:string;
  categorys:any[];
  editorContent: string = 'My Document\'s Title';
  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.categoryService.getCategorys().then(categorys => this.categorys = categorys);
  }

  onSubmit(form, event:Event) {
    event.preventDefault();
    form.value.elm1 = this.editorContent;
    console.log( form.value );
     this.articleService.addArticle(form.value).then(response =>  {
        console.log(response);
        this.articleResponse = response;
    });
  }
  
}

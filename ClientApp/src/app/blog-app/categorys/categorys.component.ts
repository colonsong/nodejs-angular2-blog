import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss'],
  providers :[CategoryService],
})
export class CategorysComponent implements OnInit {

  categorys:any[];
  constructor(private categoryService: CategoryService) {
    
  }

  ngOnInit(): void {
    this.categoryService.getCategorys().then(categorys => this.categorys = categorys);
  }

}

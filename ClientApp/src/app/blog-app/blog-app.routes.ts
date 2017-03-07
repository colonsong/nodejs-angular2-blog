import { Routes } from '@angular/router';
import { BlogAppComponent } from './blog-app.component';
import { ArticleComponent } from './article/article.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

export const ROUTER_CONFIG: Routes = [
  { path: 'blog', component: BlogAppComponent,
    children: [
      
       { path: '', component: BlogIndexComponent},
       { path: 'article-detail/:id', component: ArticleDetailComponent}
    ]
  }
];

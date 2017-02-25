import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule,Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogIndexComponent},
  { path: 'article-detail/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
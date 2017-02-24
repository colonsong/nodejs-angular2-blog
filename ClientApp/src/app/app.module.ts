import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
  ],
  declarations: [ AppComponent, ArticleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

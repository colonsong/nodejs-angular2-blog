
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { BlogAppModule } from './blog-app/blog-app.module';
import './rxjs-extensions';

@NgModule({
  imports:      [ 
    BrowserModule,
    BlogAppModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

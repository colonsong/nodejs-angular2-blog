
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { BlogAppModule } from './blog-app/blog-app.module';
import { AdminAppModule } from './admin-app/admin-app.module';
import { FormsModule } from '@angular/forms';

import './rxjs-extensions';


@NgModule({
  imports:      [ 
  
    BrowserModule,
    BlogAppModule,
    AdminAppModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

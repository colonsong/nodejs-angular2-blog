import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { Router, RouterModule } from '@angular/router';
import { AdminAppComponent } from './admin-app.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { ROUTER_CONFIG } from './admin-app.routes';
import { HttpModule } from '@angular/http';
import 'hammerjs';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forChild(ROUTER_CONFIG),
    MaterialModule.forRoot(),
    
  ],
  declarations: [
    AdminAppComponent,
    AdminIndexComponent,
  ]
})
export class AdminAppModule { }

import { Routes } from '@angular/router';
import { AdminAppComponent } from './admin-app.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';


export const ROUTER_CONFIG: Routes = [
  { path: 'admin', component: AdminAppComponent,
    children: [
        { path: '', component: AdminIndexComponent},

    ]
  }
];

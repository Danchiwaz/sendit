import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/create/create.component';
import { RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, CreateComponent, ClientComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          { path: 'create', component: CreateComponent },
          {path:'client', component: ClientComponent}
        ],
      },
    ]),
    ReactiveFormsModule
  ],
  exports: [AdminComponent],
})
export class AdminModule {}

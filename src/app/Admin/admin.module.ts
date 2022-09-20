import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/create/create.component';
import { RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClientComponent } from './components/client/client.component';
import { StoreModule } from '@ngrx/store';
import { AdminReducer } from './adminStore/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './adminStore/effects';
import { EditComponent } from './components/edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParcelFilterPipe } from './pipes/parcel-filter.pipe';
import { GoogleChartsModule } from 'angular-google-charts';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ShippmentsComponent } from './components/shippments/shippments.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CreateComponent,
    ClientComponent,
    EditComponent,
    ParcelFilterPipe,
    ShippmentsComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
          },
          { path: 'create', component: CreateComponent },
          { path: 'client', component: ClientComponent },
          { path: 'edit/:id', component: EditComponent },
          { path: 'shipped', component: ShippmentsComponent },
        ],
      },
    ]),
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    StoreModule.forFeature('parcels', AdminReducer),
    EffectsModule.forFeature([AdminEffects]),
    GoogleChartsModule,
    GooglePlaceModule,
    NgSelectModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}

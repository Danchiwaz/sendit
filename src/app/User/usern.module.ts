import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { MyParcelsComponent } from './components/my-parcels/my-parcels.component';
import {RouterModule} from '@angular/router';
import { ReceivedComponent } from './components/received/received.component';
import { SentComponent } from './components/sent/sent.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HashPipe } from './pipes/hash.pipe';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';
import { RequestComponent } from './components/request/request.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    MyParcelsComponent,
    ReceivedComponent,
    SentComponent,
    HashPipe,
    RequestComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
        children: [
          { path: '', component: MyParcelsComponent },
          { path: 'received', component: ReceivedComponent },
          { path: 'sent', component: SentComponent },
          {path:'request', component: RequestComponent}
        ],
      },
    ]),
    GoogleChartsModule,
    GoogleMapsModule,
    FormsModule,
  ],
})
export class UsernModule {}

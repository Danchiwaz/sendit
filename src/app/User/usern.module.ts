import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { MyParcelsComponent } from './components/my-parcels/my-parcels.component';
import {RouterModule} from '@angular/router';
import { ReceivedComponent } from './components/received/received.component';
import { SentComponent } from './components/sent/sent.component';


@NgModule({
  declarations: [
    UserComponent,
    MyParcelsComponent,
    ReceivedComponent,
    SentComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: UserComponent,
      children:[
        {path:'', component: MyParcelsComponent},
        {path:'received', component: ReceivedComponent},
        {path:'sent', component: SentComponent}
      ]
    }])
  ],
})
export class UsernModule { }

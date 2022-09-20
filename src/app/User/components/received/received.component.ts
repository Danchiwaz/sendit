import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IParcel1 } from 'src/app/Admin/interfaces/createParceinterface';
import { UserStateInterface } from '../../interfaces/user';
import { errorSelector, isLoadingSelector, parcelsSelector } from '../../UserStore/selectors';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {
  isLoading$: Observable<Boolean>;
  parcels$: Observable<IParcel1[]>;
  error$:Observable<string | null>
  username:string = localStorage.getItem('username')as string;

  constructor(private store: Store<UserStateInterface>) {
   
  }

  ngOnInit(): void {
     this.isLoading$ = this.store.pipe(select(isLoadingSelector));
     this.error$ = this.store.pipe(select(errorSelector));
     this.parcels$ = this.store.pipe(select(parcelsSelector));
  }

}

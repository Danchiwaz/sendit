import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IParcel1 } from 'src/app/Admin/interfaces/createParceinterface';
import { UserStateInterface } from '../../interfaces/user';
import { errorSelector, isLoadingSelector, parcelsSelector } from '../../UserStore/selectors';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  isLoading$: Observable<Boolean>;
  error$: Observable<string | null>;
  parcels$: Observable<IParcel1[]>
  
  constructor(private store:Store<UserStateInterface>) { }

  ngOnInit(): void {
     this.isLoading$ = this.store.pipe(select(isLoadingSelector));
     this.error$ = this.store.pipe(select(errorSelector));
     this.parcels$ = this.store.pipe(select(parcelsSelector));
  }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IParcel, IParcel1 } from 'src/app/Admin/interfaces/createParceinterface';
import { UserStateInterface } from '../../interfaces/user';
import * as UserActions from "../../UserStore/actions"
import { errorSelector, isLoadingSelector, parcelsSelector } from '../../UserStore/selectors';

@Component({
  selector: 'app-my-parcels',
  templateUrl: './my-parcels.component.html',
  styleUrls: ['./my-parcels.component.css'],
})
export class MyParcelsComponent implements OnInit {
  isLoading$:Observable<Boolean>
  error$:Observable<string | null>
  parcels$:Observable<IParcel1[]>;
  username:string = localStorage.getItem('username') as string;
  constructor(private store:Store<UserStateInterface>) {
   this.isLoading$ = this.store.pipe(select(isLoadingSelector))
   this.error$ = this.store.pipe(select(errorSelector));
   this.parcels$ = this.store.pipe(select(parcelsSelector))
  }

  ngOnInit(): void {
     this.store.dispatch(UserActions.getallParcels())
  }

  // googl maps
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -0.42013,
    lng: 36.94759,
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: -0.42013,
      lng: 36.94759,
    },
    {
      lat: 1.292066,
      lng: 36.821946,
    },
  ];
  // end of google maps
}

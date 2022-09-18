import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { select, StateObservable, Store,  } from '@ngrx/store';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { invokeParcelsApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';
import { chart2, mychart1 } from '../../charts/charts';
import { IParcel, IParcel1 } from '../../interfaces/createParceinterface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  deliveriesPerCountry: any[];
  fromLat: number;
  fromLong: number;
  lat: number;
  parcels$:Observable<IParcel1[]> = new Observable();
  long: number;
  toLat: number;
  isLoading: boolean = false;
  showModal: boolean = false;
  // pagination variable
  p: number = 1;
  // filter function
  filter = '';
  // collection: any[] = [];
  constructor(private store: Store, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.store.dispatch(invokeParcelsApi());
    mychart1();
    chart2();
    this.loadAllParcels();
  }

  loadAllParcels() {
    this.isLoading = true;
    setTimeout(() => {
      this.parcels$ = this.store.pipe(select(selectParcels));
      this.isLoading = false;
    }, 1500);
  }

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
}

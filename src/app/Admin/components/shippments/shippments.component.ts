import { Component, ElementRef, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { invokeParcelsApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';
import { chart2, mychart1 } from '../../charts/charts';


@Component({
  selector: 'app-shippments',
  templateUrl: './shippments.component.html',
  styleUrls: ['./shippments.component.css'],
})
export class ShippmentsComponent implements OnInit {
  deliveriesPerCountry: any[];
  fromLat: number;
  fromLong: number;
  toLat: number;
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
  }

  parcels$ = this.store.pipe(select(selectParcels));

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

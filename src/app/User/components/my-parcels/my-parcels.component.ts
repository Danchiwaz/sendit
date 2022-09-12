import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-parcels',
  templateUrl: './my-parcels.component.html',
  styleUrls: ['./my-parcels.component.css'],
})
export class MyParcelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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

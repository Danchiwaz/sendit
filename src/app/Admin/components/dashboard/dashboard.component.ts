import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { select, Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { invokeParcelsApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';
import { IParcel } from '../../interfaces/createParceinterface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  deliveriesPerCountry: any[];
  fromLat:number;
  fromLong:number;
  toLat:number;
  

  p: number = 1;
  filter = '';
  // collection: any[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(invokeParcelsApi());


     const myChart = new Chart('myChart', {
       type: 'radar',
       data: {
         labels: [
           'Nairobi',
           'Mombasa',
           'Nakuru',
           'Kericho',
           'Muranga',
           'Machakos',
         ],
         datasets: [
           {
             label: 'Clients',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(3, 90, 252, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
             ],
             borderWidth: 1,
           },
         ],
       },
     });
     const myChart2 = new Chart('mydonurght', {
       type: 'doughnut',
       data: {
         labels: [
           'Nairobi',
           'Mombasa',
           'Nakuru',
           'Kericho',
           'Muranga',
           'Machakos',
         ],
         datasets: [
           {
             label: 'Clients',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(87,50,251, 1)',
               'rgba(3, 90, 252, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
             ],
             borderWidth: 1,
           },
         ],
       },
     });
     const myChart3 = new Chart('mypolar', {
       type: 'polarArea',
       data: {
         labels: [
           'Nairobi',
           'Mombasa',
           'Nakuru',
           'Kericho',
           'Muranga',
           'Machakos',
         ],
         datasets: [
           {
             label: 'Clients',
             data: [12, 19, 3, 5, 2, 3],
             backgroundColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(87,50,251, 1)',
               'rgba(3, 90, 252, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(255, 159, 64, 0.2)',
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)',
             ],
             borderWidth: 1,
           },
         ],
       },
     });
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

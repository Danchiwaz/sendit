import { Component, ElementRef, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Chart } from 'chart.js';
import { invokeParcelsApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';


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

    this.chart1func();
    this.chartfunc2();
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

  chart1func() {
    let myChart1 = this.elementRef.nativeElement.querySelector(`#myChart`);
    const myChart = new Chart(myChart1, {
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
  }
  chartfunc2() {
    let myChart3 = this.elementRef.nativeElement.querySelector(`#mydonurght`);
    const myChart2 = new Chart(myChart3, {
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
  }
}

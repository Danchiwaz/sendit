import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  costPerKg:number = 100;
  weightParcel: number = 0;
  constructor() {}

  ngOnInit(): void {}
}

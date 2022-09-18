import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { chart2, mychart1} from '../../charts/charts';

import { IClient } from '../../interfaces/createParceinterface';
import { AdminService } from '../../services/adminService';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
myData = [
  ['London', 8136000],
  ['New York', 8538000],
  ['Paris', 2244000],
  ['Berlin', 3470000],
  ['Kairo', 19500000],
];
clients:IClient[];
isLoading:boolean = false;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.allClients();
    mychart1();
    chart2();
  }

  allClients(){
    this.adminService.getClients().subscribe({
      next: (data) =>{
        this.isLoading = true;
        setTimeout(() => {
          
          this.clients = data;
          console.log(this.clients);
          this.isLoading = false;
        }, 1500);
         
         
      },
      error: (error)=>{
         console.log(error)
         
      },
      complete:() => console.log("Completed loading all the clients")
      
    })
  }

}

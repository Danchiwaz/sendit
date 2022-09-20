import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  username: string;
  role: string;
  displayNav: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username') as string;
    this.role = localStorage.getItem('role') as string;
    console.log(this.displayNav);
    
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

  navdisplay():void{
    this.displayNav = !this.displayNav;
    console.log(this.displayNav);
     // disable patch
  }
}

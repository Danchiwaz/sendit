import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userchart1, userchart2 } from '../../charts/chart';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username: string;
  role: string;
  constructor(private router:Router) {}

  ngOnInit(): void {
    userchart1();
    userchart2();

    this.username = localStorage.getItem('username') as string;
    this.role = localStorage.getItem('role') as string;
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/auth/login']);
  }
  navdisplay() {}
}

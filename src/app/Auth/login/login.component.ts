import { Component, OnInit } from '@angular/core';
import { ILogin } from './interfaces/loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmitLogin(loginForm : any){

  }

}

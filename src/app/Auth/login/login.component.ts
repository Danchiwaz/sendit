import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from './interfaces/loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  OnSubmitLogin(loginForm : any){
    if(loginForm.username == 'Daniel' && loginForm.password == '123'){
      this.router.navigate(['/admin']);
    }
    
  }
  

}

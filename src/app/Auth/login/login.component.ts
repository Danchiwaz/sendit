import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from './interfaces/loginInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorAlert: string = '';
  password: string = '';
  login:boolean = false;
  show = false;

  error = 'Invalid credentials';

  close() {
    this.login = true;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  OnSubmitLogin(loginForm: any) {
    if (loginForm.username === 'Daniel' && loginForm.password === '1234') {
      this.router.navigate(['/admin']);
    } else if (
      loginForm.username === 'Naftaly' &&
      loginForm.password === '1234'
    ) {
      this.router.navigate(['/user']);
    } else {
      this.show = true
      
        setTimeout(() => {
          this.login = true;
        }, 1000);
      
    }
  }
}

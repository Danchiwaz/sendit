import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Admin/services/adminService';
import { AuthService } from '../authservices/auth.service';
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

  message:string;

  close() {
    this.login = true;
  }

  constructor(private router: Router, private authservice:AuthService) {}

  ngOnInit(): void {}

  OnSubmitLogin(loginForm: ILogin) {
   this.authservice.loginUser(loginForm).subscribe({
    next: (data) =>{
      localStorage.setItem('token', data.token as string)
      localStorage.setItem('username', data.username as string)
      localStorage.setItem('role', data.role as string)
      if(data.role === 'user'){
        this.router.navigate(['/user']);
      }
      else if(data.role === 'admin'){
        this.router.navigate(['/admin']);
      }
      
    }, 
    error: (error) => {
      this.message = 'Invalid credentials';
      this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 2000);
    },
    
    complete: () => console.log("Completed loginin user")
    
   })
   
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AdminService } from 'src/app/Admin/services/adminService';
import { AuthService } from '../authservices/auth.service';
import { invokeAuthAPI, invokeAuthRegisterApi } from '../AuthStore/actions';
import { selecUsers } from '../AuthStore/selector';
import { UserRegister } from '../interfaces/user-register';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  filledRegisterForm: UserRegister;
  isLoading: boolean = false;
  message: string;
  login: boolean = false;
  show = false;

  close() {
    this.login = true;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {}
  users$ = this.store.pipe(select(selecUsers));

  ngOnInit(): void {
    this.store.dispatch(invokeAuthAPI());
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }
  signUp() {
    this.filledRegisterForm = {
      fullname: this.registerForm.get('fullName')?.value,
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };
    this.isLoading = true;
    this.show = true;
    this.authService.registerNewUser(this.filledRegisterForm).subscribe({
      next: (data) => {
        this.message = data.message as string;
        setTimeout(() => {
          this.show = false;
          
          this.isLoading = false;
          this.router.navigate(['/auth/login']);
        }, 1500);
      },
      error: (error) => {
        
        this.isLoading = false;
        this.show = true;
        this.message = "Username or email exist";
        setTimeout(() => {
          this.show = false;
        }, 2000);
      },
      complete: () => console.log('Successfully registered'),
    });
  }
}

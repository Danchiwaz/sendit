import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
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

  constructor(private fb: FormBuilder, private store: Store, private router:Router) {}
  users$ = this.store.pipe(select(selecUsers))

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
    this.store.dispatch(invokeAuthRegisterApi({user:{...this.filledRegisterForm}}));
    this.router.navigate(['/auth/login']);
  }
}

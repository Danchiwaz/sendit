import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from '../Shared/componets/nav.component';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [CommonModule,ReactiveFormsModule, SharedModule, FormsModule,  ],
  exports: [LoginComponent, SigninComponent],
})
export class AuthModule {}

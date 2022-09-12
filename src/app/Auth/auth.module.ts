import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from '../Shared/componets/nav.component';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './AuthStore/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './AuthStore/effects';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from '../ErrorPage/error.component';



@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature('users', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [LoginComponent, SigninComponent],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AdminModule } from './Admin/admin.module';
import { UsernModule } from './User/usern.module';
import { AuthModule } from './Auth/auth.module';
import { HomeModule } from './Home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './Routes/routes';
import { HomeComponent } from './Home/components/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppReducer } from './sharedAppStatus/store/app.reducer';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: AppReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

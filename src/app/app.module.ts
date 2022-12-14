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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppReducer } from './sharedAppStatus/store/app.reducer';
import { ErrorComponent } from './ErrorPage/error.component';
import { NavbarDirective } from './Directives/navbar.directive';
import { TokenInterceptorService } from './Admin/services/token-interceptor.service';



@NgModule({
  declarations: [AppComponent, ErrorComponent, NavbarDirective],
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

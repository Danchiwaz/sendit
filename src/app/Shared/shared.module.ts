import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './componets/nav.component';
import {RouterModule} from '@angular/router'
import { GoogleMapsModule } from '@angular/google-maps';
import { ErrorSuccessComponent } from './error-success/error-success.component';

@NgModule({
  declarations: [NavComponent, ErrorSuccessComponent],
  imports: [CommonModule, RouterModule, GoogleMapsModule],
  exports: [NavComponent, ErrorSuccessComponent],
})
export class SharedModule {}

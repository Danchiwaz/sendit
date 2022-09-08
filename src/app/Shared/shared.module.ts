import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './componets/nav.component';
import {RouterModule} from '@angular/router'
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, GoogleMapsModule],
  exports: [NavComponent],
})
export class SharedModule {}

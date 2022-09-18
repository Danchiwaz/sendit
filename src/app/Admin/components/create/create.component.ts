import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/sharedAppStatus/store/app-state';
import { setApiStatus } from 'src/app/sharedAppStatus/store/app.action';
import { selectAppState } from 'src/app/sharedAppStatus/store/app.selector';
import { invokeCreateParcelApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';
import { IParcel, IParcel1 } from '../../interfaces/createParceinterface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  userAddress: string = '';
  userLatitude: string = '';
  userLongitude: string = '';
  userAddress1: string = '';
  userLatitude1: string = '';
  userLongitude1: string = '';
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private appState: Store<AppState>,
    private router: Router
  ) {}
  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address;
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
  }
  handleAddressChange1(address: any) {
    this.userAddress1 = address.formatted_address;
    this.userLatitude1 = address.geometry.location.lat();
    this.userLongitude1 = address.geometry.location.lng();
  }
  createParcelForm: FormGroup;
  parcel: IParcel1;
  ngOnInit(): void {
    this.createParcelForm = this.fb.group({
      sender: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]],
      fromlocation: ['', [Validators.required]],
      tolocation: ['', [Validators.required]],
      pickdate: ['', [Validators.required]],
      arrivaldate: ['', [Validators.required]],
      trackingno: ['', [Validators.required]],
    });
    console.log(this.createParcelForm.value);
  }

  reload(){
    this.store.pipe(select(selectParcels));
  }

  // create parcel
  createParcel() {
    const p = {
      ...this.createParcelForm.value,
      tolocation: {
        address: this.userAddress,
        latitude: this.userLatitude,
        longitude: this.userLongitude,
      },
      fromlocation: {
        address: this.userAddress1,
        latitude: this.userLatitude1,
        longitude: this.userLongitude1,
      },
    };
    this.parcel = p;
    this.store.dispatch(invokeCreateParcelApi({ payload: { ...this.parcel } }));
    let appStatus$ = this.store.pipe(select(selectAppState));

    appStatus$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appState.dispatch(
          setApiStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
        window.location.reload();
      }
    });
  }
  // end of creare parcel
}

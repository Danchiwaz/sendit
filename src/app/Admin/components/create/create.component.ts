import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/sharedAppStatus/store/app-state';
import { setApiStatus } from 'src/app/sharedAppStatus/store/app.action';
import { selectAppState } from 'src/app/sharedAppStatus/store/app.selector';
import { invokeCreateParcelApi } from '../../adminStore/actions';
import { selectParcels } from '../../adminStore/selectors';
import { IParcel } from '../../interfaces/createParceinterface';

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
  parcel: IParcel;
  ngOnInit(): void {
    this.createParcelForm = this.fb.group({
      sender: ['', [Validators.required]],
      receiver: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      price: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      pick_date: ['', [Validators.required]],
      deliver_date: ['', [Validators.required]],
      tracking_no: ['', [Validators.required]],
    });
    console.log(this.createParcelForm.value);
  }

  // create parcel
  createParcel() {
    const p = {
      ...this.createParcelForm.value,
      to: {
        address: this.userAddress,
        latitude: this.userLatitude,
        longitude: this.userLongitude,
      },
      from: {
        address: this.userAddress,
        latitude: this.userLatitude,
        longitude: this.userLongitude,
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
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }
  // end of creare parcel
}

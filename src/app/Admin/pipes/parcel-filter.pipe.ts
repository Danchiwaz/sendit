import { Pipe, PipeTransform } from '@angular/core';
import { IParcel, IParcel1 } from '../interfaces/createParceinterface';

@Pipe({
  name: 'parcelFilter',
})
export class ParcelFilterPipe implements PipeTransform {
  transform(value: IParcel1[], Tracking: string): IParcel1[] {
    if (value.length === 0 || Tracking === '') {
      // name = name.toLowerCase();
      return value;
    }
    const parcels: IParcel1[] = [];
    for (let parcel of value) {
      if (parcel.sender.toString().indexOf(Tracking) != -1) {
        parcels.push(parcel);
      }
    }
    return parcels;
  }
}

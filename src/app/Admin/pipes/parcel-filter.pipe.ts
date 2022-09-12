import { Pipe, PipeTransform } from '@angular/core';
import { IParcel } from '../interfaces/createParceinterface';

@Pipe({
  name: 'parcelFilter',
})
export class ParcelFilterPipe implements PipeTransform {
  transform(value: IParcel[], Tracking: string): IParcel[] {
    if (value.length === 0 || Tracking === '') {
      // name = name.toLowerCase();
      return value;
    }
    const parcels: IParcel[] = [];
    for (let parcel of value) {
      if (parcel.sender.toString().indexOf(Tracking) != -1) {
        parcels.push(parcel);
      }
    }
    return parcels;
  }
}

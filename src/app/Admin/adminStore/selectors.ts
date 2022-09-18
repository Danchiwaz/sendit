import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IParcel1 } from '../interfaces/createParceinterface';

export const selectParcels = createFeatureSelector<IParcel1[]>('parcels');

export const selectParcelById = (parcelId: string) => {
  return createSelector(selectParcels, (parcels: IParcel1[]) => {
    let parcelById = parcels.filter((_) => _.id == parcelId);
    if (parcelById.length == 0) {
      return null;
    }
    return parcelById[0];
  });
};

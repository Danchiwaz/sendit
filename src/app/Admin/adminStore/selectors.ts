import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IParcel } from "../interfaces/createParceinterface";


export const selectParcels = createFeatureSelector<IParcel[]>("parcels");

export const selectParcelById = (parcelId:number) => {
    return createSelector(
        selectParcels,
        (parcels: IParcel[]) =>{
            let parcelById = parcels.filter(_ => _.id == parcelId);
            if (parcelById.length == 0){
                 return null;
            }
            return parcelById[0];
        }
    )
}
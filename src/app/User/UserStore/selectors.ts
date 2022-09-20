import { createSelector } from "@ngrx/store";
import { UserStateInterface } from "../interfaces/user";



export const selectFeature = (state: UserStateInterface) => state.userParcels;

export const  isLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);
export const  parcelsSelector = createSelector(selectFeature, (state) => state.parcels);
export const  errorSelector = createSelector(selectFeature, (state) => state.error);
import { createAction, props } from "@ngrx/store";
import { IParcel1 } from "src/app/Admin/interfaces/createParceinterface";


export const getallParcels = createAction('[User Module] Get All Parcels')
export const getallParcelsSuccess = createAction('[User Module] Get All Parcels success', props<{parcels:IParcel1[]}>())
export const getallParcelsFailure = createAction('[User Module] Get All Parcels Failure', props<{error:string}>())
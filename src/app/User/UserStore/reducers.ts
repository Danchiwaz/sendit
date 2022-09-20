import { createReducer, on } from "@ngrx/store";
import { IParcel1 } from "src/app/Admin/interfaces/createParceinterface";
import { ParcelsStateInterface } from "../interfaces/user";
import * as userAtions from "./actions"


export const initialState: ParcelsStateInterface = {
   isLoading: false,
   parcels: [],
   error: null
};


export const userReducer = createReducer(
   initialState,
   on(userAtions.getallParcels, (state) =>({...state, isLoading: true})),
   on(userAtions.getallParcelsSuccess, (state, action) =>({...state, isLoading: false, parcels:action.parcels })),
   on(userAtions.getallParcelsFailure, (state, action) =>({...state, isLoading: false, error: action.error }))
)
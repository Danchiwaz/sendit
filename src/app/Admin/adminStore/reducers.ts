import { createReducer, on } from "@ngrx/store";
import { IParcel } from "../interfaces/createParceinterface";
import { invokeCreateParcelApi, invokeCreateParcelSuccess, invokeParcelApiSuccess, invokeParcelUpdateApiSuccess } from "./actions";

export const initialState: ReadonlyArray<IParcel> =[];

export const AdminReducer = createReducer(
  initialState,
  on(invokeParcelApiSuccess, (state, { allParcels }) => {
    return allParcels;
  }),
  on(invokeCreateParcelSuccess, (state, { response }) => {
    let newParcel = [...state];
    newParcel.unshift(response);
    return newParcel;
  }),
  on(invokeParcelUpdateApiSuccess, (state, { response }) => {
     let newState = state.filter(_ => _.id !== response.id)
     newState.unshift(response)
     return newState;
  })
);
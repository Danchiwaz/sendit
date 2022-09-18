import { createAction, props } from "@ngrx/store";
import { IClient, IParcel1 } from "../interfaces/createParceinterface";


export const invokeParcelsApi= createAction(
    "[Admin module] invoke Parcels fetch Api"
)

export const invokeParcelApiSuccess = createAction(
  '[Admin module] invoke Parcels fetch Success',
  props<{ allParcels: IParcel1[] }>()
);

export const invokeCreateParcelApi = createAction(
  "[Admin module] invoke create parcel api",
  props<{payload: IParcel1}>()
)

export const invokeCreateParcelSuccess = createAction(
  "[Admin module] invoke create parcel success",
  props<{response: IParcel1}>()
)

export const invokeParcelUpdateApi = createAction(
  '[Admin module] invoke update parcel Api',
  props<{payload: IParcel1}>()
);
export const invokeParcelUpdateApiSuccess = createAction(
  '[Admin module]  update parcel Api success',
  props<{ response: IParcel1 }>()
);

export const invokeGetAllClientsAPI = createAction(
  '[Admin module] get all clients'
)

export const invokeGetAllClientsAPISuccess = createAction(
  '[Admin module] get all clients success',
  props<{response: IClient[]}>
)


export const invokeDeleteParcelApi = createAction(
  '[Admin module] delete parcel api',
  props<{id:string}>
)
export const invokeDeleteParcelApiSuccess = createAction(
  '[Admin module] delete parcel api Success',
  props<{id:string}>
)
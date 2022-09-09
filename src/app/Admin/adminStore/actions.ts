import { createAction, props } from "@ngrx/store";
import { IParcel } from "../interfaces/createParceinterface";


export const invokeParcelsApi= createAction(
    "[Admin module] invoke Parcels fetch Api"
)

export const invokeParcelApiSuccess = createAction(
  '[Admin module] invoke Parcels fetch Success',
  props<{ allParcels: IParcel[] }>()
);

export const invokeCreateParcelApi = createAction(
  "[Admin module] invoke create parcel api",
  props<{payload: IParcel}>()
)

export const invokeCreateParcelSuccess = createAction(
  "[Admin module] invoke create parcel success",
  props<{response: IParcel}>()
)

export const invokeParcelUpdateApi = createAction(
  '[Admin module] invoke update parcel Api',
  props<{payload: IParcel}>()
);
export const invokeParcelUpdateApiSuccess = createAction(
  '[Admin module]  update parcel Api success',
  props<{ response: IParcel }>()
);
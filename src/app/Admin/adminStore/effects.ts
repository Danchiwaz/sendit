import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, switchMap, withLatestFrom } from "rxjs";
import { AppState } from "src/app/sharedAppStatus/store/app-state";
import { setApiStatus } from "src/app/sharedAppStatus/store/app.action";
import { AdminService } from "../services/adminService";
import { invokeCreateParcelApi, invokeCreateParcelSuccess, invokeParcelApiSuccess, invokeParcelsApi, invokeParcelUpdateApi, invokeParcelUpdateApiSuccess } from "./actions";
import { selectParcels } from "./selectors";

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private adminService: AdminService,
    private appStore: Store<AppState>
  ) {}
  // effect to load all the parcels
  loadAllParcels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeParcelsApi),
      withLatestFrom(this.store.pipe(select(selectParcels))),
      switchMap(([, parcelsFromStore]) => {
        if (parcelsFromStore.length > 0) {
          return EMPTY;
        }
        return this.adminService
          .getParcels()
          .pipe(map((data) => invokeParcelApiSuccess({ allParcels: data })));
      })
    )
  );
  // end of the effect to load all the parcels

  // effect to save a Parcel
  saveNewParcel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCreateParcelApi),
      switchMap((action) => {
        this.appStore.dispatch(
          setApiStatus({
            apiStatus: { apiStatus: '', apiResponseMessage: '' },
          })
        );
        return this.adminService.createParcel(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiStatus: 'success', apiResponseMessage: '' },
              })
            );
            return invokeCreateParcelSuccess({ response: data });
          })
        );
      })
    )
  );
  // end of event to save a parcel

  // update book api
  updateParcel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeParcelUpdateApi),
      switchMap((action) => {
        this.appStore.dispatch(
          setApiStatus({
            apiStatus: { apiStatus: '', apiResponseMessage: '' },
          })
        );
        return this.adminService.updateParcel(action.payload).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiStatus: 'success', apiResponseMessage: '' },
              })
            );
            return invokeParcelUpdateApiSuccess({ response: data });
          })
        );
      })
    )
  );
  // end of update book api

  // deleting parcel 
  
  // end of deleting parcel 
}
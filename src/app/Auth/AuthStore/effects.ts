import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { AuthService } from "../authservices/auth.service";
import { invokeAuthAPI, invokeAuthApiSuccess, invokeAuthRegisterApi, registerNewUserSuccess } from "./actions";


@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authservice: AuthService) {}

  loadAllUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeAuthAPI),
      switchMap(() => {
        return this.authservice
          .getUsers()
          .pipe(map((data) => invokeAuthApiSuccess({ allUsers: data })));
      })
    )
  );

  saveNewUser$ = createEffect(() =>
    this.action$.pipe(
        ofType(invokeAuthRegisterApi),
        switchMap((action) =>{
            return this.authservice
              .registerNewUser(action.user)
              .pipe(map((data) => registerNewUserSuccess({ response: data })));
        })
        )
  );
}
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "../userservice/user.service";
import * as UserActions from "./actions"


@Injectable()
export class UserEffects{

    constructor(private actions$:Actions, private userService: UserService){}

   getParcels$ = createEffect(() => 
      this.actions$.pipe(
        ofType(UserActions.getallParcels),
        mergeMap(() => {
          return this.userService
            .getallParcels()
            .pipe(map((parcels) => UserActions.getallParcelsSuccess({parcels})),
            catchError(error => of(UserActions.getallParcelsFailure({error: error.message})))
            );
        })
      )
   )
}
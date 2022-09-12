import { createAction, props } from "@ngrx/store";
import { UserRegister } from "../interfaces/user-register";

export const invokeAuthAPI = createAction(
    "[Auth] invoke user register api"
)

export const invokeAuthApiSuccess = createAction(
    "[Auth] invoke user register api success",
    props<{allUsers: UserRegister[]}>()
)

export const invokeAuthRegisterApi = createAction(
    "[Auth] invoke user register api",
    props<{user:UserRegister}>()
)

export const registerNewUserSuccess= createAction(
    "[Auth] user register api success",
    props<{response:UserRegister}>()
)
import { createAction, props } from "@ngrx/store";
import { AppState } from "./app-state";


export const setApiStatus = createAction(
    "[GLOBAL API STATUS] success or failure api status",
    props<{apiStatus:AppState}>()
)
import { createFeatureSelector } from "@ngrx/store";
import { UserRegister } from "../interfaces/user-register";

export const selecUsers = createFeatureSelector<UserRegister[]>('users')
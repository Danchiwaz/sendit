import { createReducer, on } from '@ngrx/store';
import { UserRegister } from '../interfaces/user-register';
import { invokeAuthApiSuccess, registerNewUserSuccess } from './actions';

export const initialState: ReadonlyArray<UserRegister> = [];

export const authReducer = createReducer(
  initialState,
  on(invokeAuthApiSuccess, (state, { allUsers }) => {
    return allUsers;
  }),
  on(registerNewUserSuccess, (state, {response}) =>{
    let newState = [...state]
    newState.push(response)
    return newState;
  })
);

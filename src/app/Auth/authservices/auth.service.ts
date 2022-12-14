import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserRegister } from '../interfaces/user-register';
import { ILogin } from '../login/interfaces/loginInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl:string = environment.baseParcelUrl;
  constructor(private http:HttpClient) { }


  getUsers():Observable<UserRegister[]>{
    return this.http.get<UserRegister[]>(`${this.authUrl}/register`)
  }
  
  registerNewUser(user:UserRegister){
    return this.http.post<UserRegister>(`http://localhost:5000/user`, user);
  }

  loginUser(payload: ILogin){
    return this.http.post<ILogin>(`http://localhost:5000/user/login`, payload);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { IParcel1 } from 'src/app/Admin/interfaces/createParceinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getallParcels(){
    const username = localStorage.getItem('username');
    return this.http.get<IParcel1[]>(`http://localhost:5000/user/allparcels/${username}`).pipe(delay(2000));

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { IParcel1 } from 'src/app/Admin/interfaces/createParceinterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.baseParcelUrl;
  constructor(private http:HttpClient) { }

  getallParcels(){
    const username = localStorage.getItem('username');
    return this.http.get<IParcel1[]>(`${this.baseUrl}/user/allparcels/${username}`).pipe(delay(2000));

  }
}

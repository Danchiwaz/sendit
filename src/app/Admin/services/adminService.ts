import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IClient, IParcel, IParcel1, IResponse } from '../interfaces/createParceinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.baseParcelUrl;
  constructor(private http: HttpClient) {}
  // all parcels
  getParcels() {
    return this.http.get<IParcel1[]>(`${this.baseUrl}/parcels`);
  }
  // end of getting all parcels
  createParcel(payload: IParcel1) {
    return this.http.post<IParcel1>(`${this.baseUrl}/parcels`, payload);
  }
// update parcel  
  updateParcel(payload: IParcel1) {
    return this.http.put<IParcel1>(
      `${this.baseUrl}/parcels/${payload.id}`,
      payload
    );
  }

  deleteParcel(id:string){
    this.http.delete(`${this.baseUrl}/parcels/${id}`);
  }

//   get all clients from the database 
   getClients():Observable<IClient[]>{
    return this.http.get<IClient[]>(`${this.baseUrl}/parcels/clients`)
   }

   getAllUsernames(){
    return this.http.get(`${this.baseUrl}/user`);
   }

   updateAsDelivered(id:any){
    return this.http.put<IResponse>(
      `${this.baseUrl}/parcels/delivered/${id}`,
      null
    );
   }



}

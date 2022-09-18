import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IClient, IParcel, IParcel1 } from '../interfaces/createParceinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = environment.baseParcelUrl;
  constructor(private http: HttpClient) {}
  // all parcels
  getParcels() {
    return this.http.get<IParcel1[]>(`http://localhost:5000/parcels`);
  }
  // end of getting all parcels
  createParcel(payload: IParcel1) {
    return this.http.post<IParcel1>(`http://localhost:5000/parcels`, payload);
  }
// update parcel  
  updateParcel(payload: IParcel1) {
    return this.http.put<IParcel1>(
      `http://localhost:5000/parcels/${payload.id}`,
      payload
    );
  }

  deleteParcel(id:string){
    this.http.delete(`http://localhost:5000/parcels/${id}`);
  }

//   get all clients from the database 
   getClients():Observable<IClient[]>{
    return this.http.get<IClient[]>(`http://localhost:5000/parcels/clients`)
   }


}

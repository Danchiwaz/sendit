import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; import "@angular/common/http"
import { environment } from "src/environments/environment";
import { IParcel } from "../interfaces/createParceinterface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    baseUrl = environment.baseParcelUrl;
    constructor(private http:HttpClient){}
// all parcels 
    getParcels(){
        return this.http.get<IParcel[]>(`${this.baseUrl}/parcels`)
    }
// end of getting all parcels 
createParcel(payload: IParcel){
    return this.http.post<IParcel>(`${this.baseUrl}/parcels`, payload);
}

updateParcel(payload: IParcel){
    return this.http.put<IParcel>(`${this.baseUrl}/parcels/${payload.id}`, payload);
}
}
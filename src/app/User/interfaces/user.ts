import { IParcel1 } from "src/app/Admin/interfaces/createParceinterface";

export interface ParcelsStateInterface {
  isLoading: boolean;
  parcels: IParcel1[];
  error: string | null;
}


export interface UserStateInterface {
    userParcels: ParcelsStateInterface
} 

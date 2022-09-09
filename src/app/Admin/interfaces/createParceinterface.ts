export interface IParcel {
  id?: number;
  status?: string;
  sender: string;
  receiver: string;
  weight: string;
  from: Location;
  to: Location;
  tracking_no: string;
  pick_date: string;
  deliver_date: string;
  price: number;
 
}


export interface Location {
  address: string;
  latitute?: number;
  longitude?: number;
}
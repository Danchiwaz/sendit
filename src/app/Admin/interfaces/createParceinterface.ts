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

export interface IParcel1 {
  id?: string;
  sender: string;
  receiver: string;
  weight: string;
  price: number;
  fromlocation: Location;
  tolocation: Location;
  status?: string;
  trackingno: string;
  isdeleted?: string;
  pickdate: string;
  arrivaldate: string;
  sent?: boolean;
  received?: boolean;
  checker?: 'no';
}

export interface Location {
  address: string;
  latitute?: number;
  longitude?: number;
}


export interface IClient{
id?:string;
fullname: string;
username: string;
email: string;
password: string;
isregemail?:string;
issent?:string;
isreceived?:string;
isdeleted?:string;
role?: string;
}

export interface IResponse{
  message: string;
}
 
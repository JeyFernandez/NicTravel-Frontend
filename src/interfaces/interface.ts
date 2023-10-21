
export interface Hotel {
  id: number;
  name: string;
  description: string;
  servises: string;
  address: string;
  phone: string;
}

export interface users{
  id: number,
  name: string,
  email:string,
  telefono:string,
  token: string,
  isActive: boolean,
  fileName: string,
  image: string,
}
export interface Services{
id : number,
name: string,
description: string,
}

export interface Restaurants{
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
  timeOpen: string;
  timeClose: string;
  address: string;
}

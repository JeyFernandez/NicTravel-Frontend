
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

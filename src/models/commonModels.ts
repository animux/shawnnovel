export interface ISubmitContact{
    fitstName: string;
    lastName: string;
    email: string;
    message: string;
    address: string;
}

export interface IService{
    id: number;
    type: string;
    heading: string;
    image: string;
    content: string;
}

export interface IServices{
    type: string;
    heading: string;
    id: number;
}

export interface INews{
    id:number;
    heading: string;
    date: Date;
    image: string;
    content: string;
}

export interface IClients{
    id: number;
    name: string;
    logo: string;
}
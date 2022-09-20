export interface ILogin{
    email: string;
    password: string;
    username?:string;
    token?: string;
    role:string;
}
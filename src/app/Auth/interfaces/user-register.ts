export interface UserRegister {
  id?: number;
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirm_password?: string;
}

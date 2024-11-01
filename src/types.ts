import { User } from "./db/entities/User";

export interface ITokens {
  token: string;
  refresh_token: string;
};

export interface IUser extends User{
  password: string
}

export interface ISignIn {
  email: string;
  password: string;
}
export interface IData {
  payload: {
    tokens?: ITokens;
    user?: User;
    users?: User[];
  };
}

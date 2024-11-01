import * as yup from "yup";
import { birthDateYup, emailYup, passwordYup, textYup } from "./yups";

export interface ISigninSchema {
  body: {
    email: string;
    password: string;
  };
}

export interface ISignupSchema {
  body: {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    password: string;
  };
}

export const signupSchema: yup.ObjectSchema<ISignupSchema> = yup.object({
  body: yup.object({
    firstName: textYup,
    lastName: textYup,
    email: emailYup,
    password: passwordYup,
    birthDate: birthDateYup,
  }),
});

export const signinSchema: yup.ObjectSchema<ISigninSchema> = yup.object({
  body: yup.object({
    email: emailYup,
    password: passwordYup,
  }),
});

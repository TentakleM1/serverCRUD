import * as yup from "yup";
import { birthDateYup, emailYup, passwordYup, textYup } from "./yups";
import { IRequsetShchema } from "./types";

export const signupSchema: yup.ObjectSchema<IRequsetShchema> = yup.object({
  body: yup.object({
    firstName: textYup,
    lastName: textYup,
    email: emailYup,
    password: passwordYup,
    birthDate: birthDateYup,
  }),
});

export const signinSchema: yup.ObjectSchema<IRequsetShchema> = yup.object({
  body: yup.object({
    email: emailYup,
    password: passwordYup,
  }),
});

import * as yup from "yup";
import {
  birthDateYup,
  emailYup,
  passwordYup,
  textYup,
  userIdParamYup,
} from "./yups";

export interface IEditUserSchema {
  body: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
  };
}

export interface IChangePasswordSchema {
  params: number;
  body: {
    password: string;
  };
}

export interface ILinkSchema {
  params: number;
}

export const linkSchema: yup.ObjectSchema<ILinkSchema> = yup.object({
  params: userIdParamYup,
});

export const editUserSchema: yup.ObjectSchema<IEditUserSchema> = yup.object({
  body: yup.object({
    id: yup.string().required(),
    firstName: textYup,
    lastName: textYup,
    email: emailYup,
    birthDate: birthDateYup
  }).noUnknown(true, 'More fields than needed'),
});

export const changePasswordSchema: yup.ObjectSchema<IChangePasswordSchema> =
  yup.object({
    params: userIdParamYup,
    body: yup.object({
      password: passwordYup,
    }).noUnknown(true, 'More fields than needed'),
  });

import * as yup from "yup";
import {
  birthDateYup,
  emailYup,
  passwordYup,
  textYup,
  idParamYup,
} from "./yups";
import { IRequsetShchema } from "./types";

export const paramIdSchema: yup.ObjectSchema<IRequsetShchema> = yup.object({
  params: yup.object({
    id: idParamYup,
  }),
});

export const editUserSchema: yup.ObjectSchema<IRequsetShchema> = yup.object({
  body: yup
    .object({
      id: idParamYup,
      firstName: textYup,
      lastName: textYup,
      email: emailYup,
      birthDate: birthDateYup,
    })
    .noUnknown(true, "More fields than needed"),
});

export const changePasswordSchema: yup.ObjectSchema<IRequsetShchema> =
  yup.object({
    params: yup.object({
      userId: idParamYup,
    }),
    body: yup
      .object({
        password: passwordYup,
      })
      .noUnknown(true, "More fields than needed"),
  });

import {
  birthDateYup,
  emailYup,
  passwordYup,
  textYup,
  idParamYup,
} from "./yups";
import { IRequestShchema } from "../createValidatorMiddalware";

export const paramUserIdSchema: IRequestShchema = {
  params: {
      userId: idParamYup,
    },
};

export const editUserSchema: IRequestShchema = {
  body: {
      id: idParamYup,
      firstName: textYup,
      lastName: textYup,
      email: emailYup,
      birthDate: birthDateYup,
    },
};

export const changePasswordSchema: IRequestShchema = {
  params: {
    userId: idParamYup,
  },
  body:{
      password: passwordYup,
    },
};

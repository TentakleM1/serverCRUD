import { birthDateYup, emailYup, passwordYup, textYup } from "./yups";
import { IRequestShchema } from "../createValidatorMiddalware";

export const signUpSchema: IRequestShchema = {
  body: {
      firstName: textYup,
      lastName: textYup,
      email: emailYup,
      password: passwordYup,
      birthDate: birthDateYup,
    },
};

export const signInSchema: IRequestShchema = {
  body: {
      email: emailYup,
      password: passwordYup,
    },
};

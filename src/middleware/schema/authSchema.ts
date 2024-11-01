import * as yup from "yup";

export interface signinSchema {
  email: string;
  password: string;
}

export interface signupSchema extends signinSchema {
  firstName: string;
  lastName: string;
  birthDate: string;
}

const textYup = yup
  .string()
  .min(2, "Min char 2")
  .max(15, "Max char 15")
  .required();

const passwordYup = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(32, "Not must 36 characters")
  .matches(/[a-z]/, "Password must contain a lowercase letter")
  .matches(/[A-Z]/, "Password must contain a uppercase letter")
  .matches(/[^a-zA-Z\d]/, "Password must special symbol")
  .required();

const emailYup = yup.string().email("Uncorect email").required();

export const signupSchema: yup.ObjectSchema<signupSchema> = yup.object({
  firstName: textYup,
  lastName: textYup,
  email: emailYup,
  password: passwordYup,
  birthDate: yup
    .string()
    .matches(/(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/, "dd-mm-yyyy")
    .required(),
});

export const signinSchema: yup.ObjectSchema<signinSchema> = yup.object({
  email: emailYup,
  password: passwordYup,
});

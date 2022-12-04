import strings from "./strings.json";
import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  first_name: Yup.string()
    .min(3, strings.validationMsg.minimum_three_char)
    .required(strings.validationMsg.required)
    .max(50, strings.validationMsg.maximu_fifty_char),
  last_name: Yup.string()
    .min(3, strings.validationMsg.minimum_three_char)
    .required(strings.validationMsg.required)
    .max(50, strings.validationMsg.maximu_fifty_char),
  email: Yup.string()
    .email(strings.validationMsg.invalid_email)
    .required(strings.validationMsg.required)
    .max(50, strings.validationMsg.maximu_fifty_char),
  username: Yup.string()
    .min(3, strings.validationMsg.minimum_three_char)
    .required(strings.validationMsg.required)
    .max(50, strings.validationMsg.maximu_fifty_char),
  password: Yup.string()
    .min(8, strings.validationMsg.minimu_password)
    .required(strings.validationMsg.required)
    .max(14, strings.validationMsg.maximum_password)
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      strings.validationMsg.password_regex_msg
    ),
});

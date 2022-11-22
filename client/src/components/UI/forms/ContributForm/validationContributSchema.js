// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  invested_amount: yup
    .string("string")
    .required("Ce champ est requis !"),
  sold: yup
    .boolean()
    .required(),
  text: yup
    .string("string")
  /* card_number: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(16, "moins de 16 caractères"),
  expiry_date: yup
    .string("string")
    .required("Ce champ est requis !"),
  security_code: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(3, "moins de 3 caractères"), */

});
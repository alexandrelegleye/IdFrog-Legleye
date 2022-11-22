// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  gender: yup
    .string("string")
    .required("Ce champ est requis !"),
  last_name: yup
    .string("string")
    .required("Ce champ est requis !"),
  first_name: yup
    .string("string")
    .required("Ce champ est requis !"),
  birth_date: yup
    .string("string")
    .required("Ce champ est requis !"),
  birth_place: yup
    .string("string")
    .required("Ce champ est requis !"),
  nationality: yup
    .string("string")
    .required("Ce champ est requis !"),
  city: yup
    .string("string")
    .required("Ce champ est requis !"),
  zip_code: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(5, "moins de 5 caractères")
    .max(5, "plus de 5 caractères"),
  phone_number: yup
    .string("string")
    .required("Ce champ est requis !"),
  adress: yup
    .string("string")
    .required("Ce champ est requis !"),
/*   website: yup
    .string()
    .url() */
});

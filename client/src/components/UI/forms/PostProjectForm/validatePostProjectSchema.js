// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string("string")
    .required("Ce champ est requis !"),
  title: yup
    .string("string")
    .required("Ce champ est requis !"),
  category_id: yup
    .string("string")
    .required("Ce champ est requis !"),
  resume: yup
    .string("string")
    .required("Ce champ est requis !"),
  description: yup
    .string("string")
    .required("Ce champ est requis !"),
  amount_target: yup
    .string("string")
    .required("Ce champ est requis !"),
  invest_type: yup
    .string("string")
    .required("Sélectionez un type de financement"),
  rate: yup
    .string("string"),
  end_time: yup
    .string("string")
    .required("Sélectionez une date de fin de campagne"), 
  website: yup
    .string()
    .url(),
  status: yup
    .string(),
  visibility: yup
    .boolean(),
});

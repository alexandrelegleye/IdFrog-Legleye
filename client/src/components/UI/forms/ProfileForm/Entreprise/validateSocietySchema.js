// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  siret: yup
    .string("string")
    .required("Ce champ est requis !"),
  name: yup
    .string("string")
    .required("Ce champ est requis !"),
});

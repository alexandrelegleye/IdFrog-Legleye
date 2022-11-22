/// Validation Yup
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  pseudo: yup
    .string("string")
    .required("Ce champ est requis !")
    .min(4, "moins de 4 caractères")
    .max(100, "plus de 100 caractères"),
  email: yup
    .string("string")
    .email("Email non valide")
    .required("Ce champ est requis !"),
  password: yup
    .string("string")
    .required("Ce champ est requis !")
    .min("4", "Le mot de passe doit comporter plus de 4 caractères")
    .max(120, "Le mot de passe doit comporter moins de 120 caractères"),
  confirmPassword: yup
    .string("string")
    .oneOf([yup.ref("password")], "Le mot de passe ne correspond pas")
    .required("Confirmer votre mot de passe"),
});
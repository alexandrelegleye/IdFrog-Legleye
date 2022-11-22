/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { handleSubmitProfil } from "../../Utils/Utils";

import UploadAvatar from "../UploadAvatar/UploadAvatar";
import {
  patchProfileDetails,
  postFIllProfileDetails,
} from "../../../../../services/profileService";

// Materail UI
import {
  TextField,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Alert,
} from "@mui/material";
// Yup Schema
import { validationSchema } from "../validatePersonSchema.js";
//Formik
import { useFormik } from "formik";
// CSS
import { postParticulierStyles } from "./styles";

function ProfileForm({
  // eslint-disable-next-line react/prop-types
  person,
  profileStatus,
  token,
}) {
  //console.log("person", person);
  const [showError, setShowError] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [alertStyle, setAlertStyle] = useState("error");

  const handleSubmit = (response) => {
    const alertMessage = handleSubmitProfil(response, 201)
    setAlertStyle(alertMessage.alertStyle)
    setLoginError({
      status : alertMessage.errorStatus,
      message: alertMessage.message
    })
    setShowError(alertMessage.showMessage)
    return
  }; 

  const formik = useFormik({
    initialValues: {
      gender: person?.gender ?? "",
      first_name: person?.first_name ?? "",
      last_name: person?.last_name ?? "",
      status: profileStatus,
      birth_date: person?.birth_date ?? "",
      birth_place: person?.birth_place ?? "",
      nationality: person?.nationality ?? "",
      city: person?.city ?? "",
      zip_code: person?.zip_code ?? "",
      phone_number: person?.phone_number ?? "",
      adress: person?.adress ?? "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (person === null) {
        //console.log("profil vide");
        const response = await postFIllProfileDetails(token, values);
        handleSubmit(response);
        return;
      } else {
        //console.log("personne déjà existante");
        const response = await patchProfileDetails(token, values);
        handleSubmit(response);
        return;
      }
    },
  });

  return (
    <Box className="profileForm">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <RadioGroup
          row
          name="gender"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
        >
          <FormControlLabel value="male" control={<Radio />} label="Monsieur" />

          <FormControlLabel value="female" control={<Radio />} label="Madame" />

          {/* <UploadAvatar /> */}
        </RadioGroup>

        <TextField
          sx={postParticulierStyles.leftInput}
          required
          margin="dense"
          type="text"
          name="last_name"
          id="last_name"
          label="Nom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
          error={formik.errors.first_name && formik.touched.first_name}
        />

        <TextField
          sx={postParticulierStyles.rightInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="first_name"
          id="first_name"
          label="Prenom"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          helperText={formik.touched.first_name && formik.errors.first_name}
          error={formik.errors.first_name && formik.touched.first_name}
        />

        <TextField
          sx={postParticulierStyles.leftInput}
          required
          margin="dense"
          type="date"
          name="birth_date"
          id="birth_date"
          label="Date de naissance"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birth_date}
          helperText={formik.touched.birth_date && formik.errors.birth_date}
          error={formik.errors.birth_date && formik.touched.birth_date}
        />

        <TextField
          sx={postParticulierStyles.rightInput}
          required
          margin="dense"
          type="text"
          name="birth_place"
          id="birth_place"
          label="Lieu de naissance"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birth_place}
          helperText={formik.touched.birth_place && formik.errors.birth_place}
          error={formik.errors.birth_place && formik.touched.birth_place}
        />

        <TextField
          sx={postParticulierStyles.leftInput}
          required
          margin="dense"
          type="text"
          id="nationality"
          label="Nationalité"
          name="nationality"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nationality}
          helperText={formik.touched.nationality && formik.errors.nationality}
          error={formik.errors.nationality && formik.touched.nationality}
        />

        <TextField
          sx={postParticulierStyles.rightInput}
          required
          margin="dense"
          type="text"
          id="city"
          label="Ville"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          helperText={formik.touched.city && formik.errors.city}
          error={formik.errors.city && formik.touched.city}
        />

        <TextField
          sx={postParticulierStyles.leftInput}
          required
          margin="dense"
          type="text"
          id="zip_code"
          label="Code postal"
          name="zip_code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zip_code}
          helperText={formik.touched.zip_code && formik.errors.zip_code}
          error={formik.errors.zip_code && formik.touched.zip_code}
        />

        <TextField
          sx={postParticulierStyles.rightInput}
          fullWidth
          required
          margin="dense"
          type="text"
          id="phone_number"
          label="Téléphone"
          name="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
          helperText={formik.touched.phone_number && formik.errors.phone_number}
          error={formik.errors.phone_number && formik.touched.phone_number}
        />

        <TextField
          sx={postParticulierStyles.marginTop}
          fullWidth
          required
          margin="dense"
          type="text"
          name="adress"
          id="adress"
          label="Adresse"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.adress}
          helperText={formik.touched.adress && formik.errors.adress}
          error={formik.errors.adress && formik.touched.adress}
        />
        {/* 
      <TextField  // TODO ajouter ce champs dans la bdd
          sx={postParticulierStyles.leftInput}
          fullWidth
          margin="dense"
          type="text"
          id="website"
          label="Liens de vos résaux social et site web"
          defaultValue="https://"
          name="website"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.website}
          helperText={formik.touched.website && formik.errors.website}
          error={formik.errors.website && formik.touched.website}
        /> */}

        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 4, mb: 4, mr: 2 }}
        >
          ENREGISTRER VOS INFORMATIONS
        </Button>

        <Button type="submit" color="primary" sx={{ mt: 4, mb: 4 }}>
          ANNULER
        </Button>
        {showError && (
          <Alert
            severity={alertStyle}
            onClose={() => {
              setShowError(false);
            }}
          >
            {loginError.status ? `'Erreur' ${loginError.status}` : ""} -{" "}
            {loginError.message}
          </Alert>
        )}
      </form>
    </Box>
  );
}

ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;

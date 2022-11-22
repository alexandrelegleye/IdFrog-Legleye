/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// import PropTypes from 'prop-types';

// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  FormControl,
} from "@mui/material";
// Yup Schema
import { validationSchema } from "./validationContributSchema";
//Formik
import { useFormik } from "formik";
// CSS
import { postContributStyles } from "./styles";
import { useState } from "react";

import { Link } from "react-router-dom";
import { postContribution } from "../../../../services/contributionService";
import { postComment } from "../../../../services/CommentService";
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../../../atomes/profileAtomes";

function ContributForm({
  projectId,
  projectDetail,

}) {
  const {token} = useRecoilValue(profileConnexionstate);
  const [showError, setShowError] = useState(false)
  const [projectError, setProjectError] = useState("")
  const [alertStyle, setAlertStyle] = useState("error")
  const formik = useFormik({
    initialValues: {
      invested_amount: "",
      text: "",
      sold: false,
      /*   card_number: '',
      expiry_date: '',
      security_code: '', */
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const response = await postContribution(token, projectId, values);
      //console.log(response);
      if (response.status !== 201) {
        console.log("error in contribution");
        setAlertStyle("error");
        setProjectError({
          status: response.status,
          message: response.data.message,
        });
        setShowError(true);
        return;
      }
      // Si ok on envoie le comment
      const res = await postComment(token, projectId, values);
      if (res.status !== 201) {
        console.log("error in comment");
        setAlertStyle("error");
        setProjectError({
          status: response.status,
          message: response.data.message,
        });
        setShowError(true);
        return;
      }
      // Si tout ok message succès
      setAlertStyle("success");
      setProjectError({
        status: null,
        message: "Contribution envoyée avec succès",
      });
      setShowError(true);
      resetForm();
      return;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="profileForm" sx={{ p: 6 }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Typography sx={postContributStyles.titre} variant="h5">
          Quel type de contribution souhaitez vous faire pour le projet:
          <Link to={`/project/${projectDetail.id}`}>
            {" "}
            &apos;{projectDetail.name}&apos;?
          </Link>
          <br />
          Type d&apos;investissement : &apos;{projectDetail.invest_type}&apos;
        </Typography>

        {/*  <RadioGroup row name="invest_type">
          <FormControlLabel
            value="don"
            control={<Radio />}
            label="Contribution par Don"
          />
          <FormControlLabel
            value="pret"
            control={<Radio />}
            label="Contribution par Prêt"
          />
        </RadioGroup> */}

        <Typography
          sx={postContributStyles.titre}
          color="Secondary"
          variant="h5"
        >
          Montant :
        </Typography>

        <TextField
          sx={postContributStyles.leftInput}
          required
          margin="dense"
          type="text"
          label="Montant (€)"
          name="invested_amount"
          id="invested_amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.invested_amount}
          helperText={
            formik.touched.invested_amount && formik.errors.invested_amount
          }
          error={
            formik.errors.invested_amount && formik.touched.invested_amount
          }
        />

        {/* <TextField
          sx={postContributStyles.rightInput}
          required
          margin="dense"
          type="text"
          name="card_number"
          id="card_number"
          label="Numéro de carte"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.card_number}
          helperText={formik.touched.card_number && formik.errors.card_number}
          error={formik.errors.card_number && formik.touched.card_number}
        />

        <TextField
          sx={postContributStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="expiry_date"
          id="expiry_date"
          label="Expire fin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.expiry_date}
          helperText={formik.touched.expiry_date && formik.errors.expiry_date}
          error={formik.errors.expiry_date && formik.touched.expiry_date}
        />

        <TextField
          sx={postContributStyles.rightInput}
          fullWidth
          required
          margin="dense"
          type="security_code"
          id="security_code"
          label="Code sécurité"
          name="security_code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.security_code}
          helperText={
            formik.touched.security_code && formik.errors.security_code
          }
          error={formik.errors.security_code && formik.touched.security_code}
        /> */}

        <FormControl fullWidth sx={{ mt: 1 }}>
          <Typography sx={{ pt: 0.5 }} color="Secondary" variant="h5">
            Laisser un commentaire :
          </Typography>

          <TextField
            sx={{ my: 2 }}
            fullWidth
            label="Votre commentaire"
            multiline
            rows={2}
            name="text"
            id="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
            helperText={formik.touched.text && formik.errors.text}
            error={formik.errors.text && formik.touched.text}
          />
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 4, mb: 4, mr: 2 }}
        >
          ENVOYEZ VOTRE CONTRIBUTION
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
            {projectError.status ? `'Erreur' ${projectError.status}` : ""} -{" "}
            {projectError.message}
          </Alert>
        )}
      </form>
    </Box>
  );
}
ContributForm.propTypes = {};

ContributForm.defaultProps = {};

export default ContributForm;

/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

import { patchProject, postProject } from "../../../../services/projectService";

// import PropTypes from 'prop-types';

// Components
import UploadImages from "./uploadImg/UploadImages";

// Materail UI
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  CardHeader,
  Card,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarHalfIcon from "@mui/icons-material/StarHalf";
// Yup Schema
import { validationSchema } from "./validatePostProjectSchema";
//Formik
import { useFormik } from "formik";
// CSS
import { postProjectStyles } from "./styles";
import palette from "../../../../assets/styles/_vars.scss";
// Tableau des categories
import { category } from "./category";
import { uploadProjectImage } from "../../../../services/imgService";
import { handlePatchProject } from "../Utils/Utils";

function PostProjectForm({ token, profileStatus, projectDetail }) {

  console.log(projectDetail);

  const [selectedImage, setSelectedImage] = useState(null);
  const [img_url, setImageUrl] = useState(null);
  const [showError, setShowError] = useState(false);
  const [projectError, setProjectError] = useState("");
  const [alertStyle, setAlertStyle] = useState("error");

  const handleSubmit = async (response, imgUploadedUrl) => {
    if (response.status === 201) {
      const patchResponse = await patchProject(response.data.id, token, {
        img_url: imgUploadedUrl,
      });
      console.log(patchResponse);
      setAlertStyle("success");
      setProjectError({
        status: null,
        message: "Projet créé avec succès",
      });
      setShowError(true);
      return;
    }
    setAlertStyle("error");
    setProjectError({
      status: response.status,
      message: response.data.message,
    });
    setShowError(true);
    return;
  };


  const formik = useFormik({
    initialValues: {
      img_url: projectDetail?.img_url ?? "",
      name: projectDetail?.name ?? "",
      title: projectDetail?.title ?? "",
      category_id: projectDetail?.category_id ?? "",
      resume: projectDetail?.resume ?? "",
      description: projectDetail?.description ?? "",
      amount_target: projectDetail?.amount_target ?? "",
      invest_type: projectDetail?.invest_type ?? "",
      rate: projectDetail?.rate ?? "",
      end_time: projectDetail?.end_time ?? "",
      website: projectDetail?.website ?? "",
      status: profileStatus,
      visibility: projectDetail?.website ?? false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      //console.log(values);
      if(projectDetail){
        const response = await patchProject (projectDetail.id, token, values)
        console.log(response);
        const alertStyle = handlePatchProject(response, 201)
        setAlertStyle(alertStyle.alertStyle)
        setProjectError({
          status: alertStyle.errorStatus,
          message: alertStyle.message,
        })
        setShowError(alertStyle.showMessage);
        return
      }
      if(selectedImage){
        const uploadUrl = await uploadProjectImage(token, {
          projectImage: selectedImage,
        });
        if (uploadUrl.status !== 201) {
          setAlertStyle("error");
          setProjectError({
            status: uploadUrl.status,
            message: uploadUrl.statusText,
          });
          setShowError(true);
          return;
        }        
        const response = await postProject(token, values);
        //console.log(response);
        handleSubmit(response, uploadUrl?.data.path);
        return
      }
      const response = await postProject(token, values);
      //console.log(response);
      handleSubmit(response, "/data/ProjectsImages/idfrog2.png");
      return
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImgUpload = (img) => {
    //console.log("formproject", img);
    setSelectedImage(img);
    setImageUrl(URL.createObjectURL(img));
  };

  return (
    <Box
      className="postProjectForm"
      sx={{ px: { xl: 2, md: 2, xs: 0 }, mt: { xl: 1, md: 0, xs: 5 } }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "2em", mb: 2, color: palette.secondary }}
      >
        {!projectDetail ? ("Quel est votre projet ?")  : ("Editer votre project") }
      </Typography>
      {projectDetail? "" :
        <UploadImages
          handleImgUpload={handleImgUpload}
          img_url={img_url}
          selectedImage={selectedImage}
        />
      }
      

      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          sx={postProjectStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="name"
          id="name"
          label="Nom de votre projet"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          helperText={formik.touched.name && formik.errors.name}
          error={formik.errors.name && formik.touched.name}
        />

        <TextField
          sx={postProjectStyles.leftInput}
          fullWidth
          required
          margin="dense"
          type="text"
          name="title"
          id="title"
          label="Titre de votre projet"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          helperText={formik.touched.title && formik.errors.title}
          error={formik.errors.title && formik.touched.title}
        />

        <Select
          sx={postProjectStyles.rightInput}
          name="category_id"
          label="Catégories"
          displayEmpty
          value={formik.values.category_id}
          onChange={formik.handleChange}
        >
          <MenuItem value="">
            <em>CATEGORIES DU PROJET</em>
          </MenuItem>
          {category.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="Résumé du projet..."
          multiline
          rows={2}
          name="resume"
          id="resume"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.resume}
          helperText={formik.touched.resume && formik.errors.resume}
          error={formik.errors.resume && formik.touched.resume}
        />

        <Typography
          sx={{ pb: 1, pt: 0.5, color: palette.secondary }}
          variant="h5"
        >
          Décrivez en détail votre projet :
        </Typography>

        <TextField
          sx={{ my: 2 }}
          fullWidth
          label="Déscription du projet..."
          multiline
          rows={8}
          name="description"
          id="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          helperText={formik.touched.description && formik.errors.description}
          error={formik.errors.description && formik.touched.description}
        />

        <Typography
          sx={{ pb: 2, pt: 0.5, color: palette.secondary }}
          variant="h5"
        >
          Montant dont vous avez besoin ?
        </Typography>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <InputLabel htmlFor="amount_target">Montant</InputLabel>
          <OutlinedInput
            endAdornment={<InputAdornment position="end">€</InputAdornment>}
            label="Montant"
            name="amount_target"
            id="amount_target"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount_target}
            error={formik.errors.amount_target && formik.touched.amount_target}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 1 }}>
          <Typography
            sx={{ pb: 0.5, pt: 0.5, color: palette.secondary }}
            variant="h5"
          >
            Quel type de financement recherchez vous ?
          </Typography>
          <Typography variant="p" sx={{ color: palette.secondary }}>
            Financement participatif non ditutif auprès d&apos;investisseurs ou
            des dons
          </Typography>
        </FormControl>

        <RadioGroup
          row
          name="invest_type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.invest_type}
        >
          <Card sx={{ width: "100%", mb: 4 }}>
            <CardHeader
              avatar={<StarHalfIcon sx={{ color: palette.primary }} />}
              action={
                <FormControlLabel value="pret" control={<Radio id="0" />} />
              }
              title="Financement avec prêt"
              subheader="Retour sur investissement par rapport à la mise"
            />
            <CardHeader
              avatar={<FavoriteIcon sx={{ color: palette.primary }} />}
              action={
                <FormControlLabel value="dons" control={<Radio id="1" />} />
              }
              title="Financement par dons"
              subheader="Avec ou sans compteparties non financières"
            />
          </Card>
        </RadioGroup>
        {formik.values.invest_type === "pret" && (
          <>
            <InputLabel sx={{ color: palette.secondary }}>
              Taux de retour sur investissement:
            </InputLabel>

            <FormControl fullWidth sx={{ mb: 1 }}>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="end"></InputAdornment>
                }
                name="rate"
                id="rate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rate}
                error={formik.errors.rate && formik.touched.rate}
              />
            </FormControl>
          </>
        )}

        <InputLabel>Date de fin de la campagne:</InputLabel>

        <TextField
          sx={postProjectStyles.leftInput}
          fullWidth
          margin="dense"
          type="date"
          id="end_time"
          name="end_time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          values={formik.values.end_time}
          helperText={formik.touched.end_time && formik.errors.end_time}
          error={formik.errors.end_time && formik.touched.end_time}
        />

        <TextField
          sx={postProjectStyles.rightInput}
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
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ mt: 4, mb: 4, mr: 2 }}
        >
          ENREGISTRER VOTRE PROJET
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

PostProjectForm.propTypes = {};

PostProjectForm.defaultProps = {};

export default PostProjectForm;

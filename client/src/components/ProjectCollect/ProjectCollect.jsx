/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SimpleShareButtons } from "react-simple-share";

// import PropTypes from "prop-types";

// Material UI
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  FormControl,
  Modal,
  Box,
  Alert,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import ProjectProgress from "../ProjectProgress/ProjectProgress";
// CSS
import { projectCollectStyles } from "./styles";

// RECOIL
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";
import { deleteProject, patchProject } from "../../services/projectService";

function ProjectCollect({
  amount,
  profile,
  createdAt,
  contributions,
  visibility,
  project_id,
  invest_type,
}) {
  let navigate = useNavigate();

  const ProfileInfo = useRecoilValue(profileConnexionstate);
  /*   const ProfileDetail = useRecoilValue(profileDetailState); */
  const [visibilityState, setvisibilityState] = useState(visibility);
  const [showError, setShowError] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [alertStyle, setAlertStyle] = useState("error");
  const [totalContributions, setTotalContributions] = useState(0);
  const [progressRatio, setProgressRatio] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //console.log("ProfileInfo", ProfileDetail);
  //console.log("profile", profile);

  const handleVisibilityState = async () => {
    const response = await patchProject(project_id, ProfileInfo.token, {
      visibility: !visibilityState,
    });
    //console.log("visibility batch response", response);
    setvisibilityState(!visibilityState);
    if (response.status === 201) {
      setAlertStyle("success");
      setLoginError({
        status: null,
        message: "Projet mis à jour",
      });
      setShowError(true);
      return;
    }
    setLoginError({
      status: response.status,
      message: response.data.message,
    });
    setShowError(true);
    return;
  };

  //console.log("visibility", visibilityState);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const progressRate = (contributionslist) => {
    let totalContribution = 0;
    if (contributionslist?.length === 0) {
      setTotalContributions(0);
      setProgressRatio(0);
    }
    contributionslist?.map(
      (contribution) => (totalContribution += contribution.invested_amount)
    );
    const rate = Number((100 * totalContribution) / amount);
    setTotalContributions(totalContribution);
    setProgressRatio(rate);
  };

  const handleDeleteProject = async () => {
    const response = await deleteProject(project_id, ProfileInfo.token);
    //console.log(response);

    if (response.status === 201) {
      return navigate("/");
    }
    setLoginError({
      status: response.status,
      message: response.data.message,
    });
    setShowError(true);
    return;
  };

  useEffect(() => {
    progressRate(contributions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressRate]);

  return (
    <>
      <Card sx={{ mx: 4, mt: 5, m: { xl: 2, md: 2, xs: 2 } }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
            {profile} •{" "}
            {new Date(createdAt).toLocaleDateString("fr-FR", options)}
          </Typography>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="div"
          >
            Modalités d&apos;investissement
          </Typography>
          <Typography variant="body2" color="secondary.light">
            Votre contribution vous sera intégralement remboursée si le projet
            n&apos;atteint pas 100% de son objectif. <br />
            Type d&apos;investissement: &apos;{invest_type}&apos;
          </Typography>
        </CardContent>

        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="secondary" gutterBottom>
            {totalContributions}€ sur{" "}
            <span style={{ fontSize: 24 }}>{amount}€</span>
          </Typography>
          <ProjectProgress progressRate={progressRatio} />
        </CardContent>

        <CardActions sx={projectCollectStyles.carAction}>
          {!ProfileInfo.isLogged ? (
            <Link to="/login">
              <Button size="small" sx={projectCollectStyles.btnPrimary}>
                Contribuer au projet &gt;
              </Button>
            </Link>
          ) : (
            <Link to={`/profile/contribut/${project_id}`}>
              <Button size="small" sx={projectCollectStyles.btnPrimary}>
                Contribuer au projet &gt;
              </Button>
            </Link>
          )}

          <Box size="small" sx={projectCollectStyles.btnSecondary}>
            Partager sur&nbsp;:&nbsp;
            <SimpleShareButtons
              whitelist={["Facebook", "Twitter", "LinkedIn"]}
              size="28px"
            />
          </Box>
        </CardActions>
      </Card>
      {ProfileInfo.pseudo === profile && (
        <Card sx={projectCollectStyles.card}>
          <CardContent>
            <Typography
              color="secondary"
              gutterBottom
              variant="h7"
              component="div"
              sx={{ fontWeight: "500" }}
            >
              Souhaitez vous que votre projet soit :
            </Typography>
            <FormControl component="fieldset" sx={{ margin: "0.5em" }}>
              <FormGroup
                aria-label="position"
                row
                /*     value={visibility}
        onChange={() => handleVisibilityState()} */
              >
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      value={!visibilityState}
                      checked={!visibilityState}
                      onChange={() => handleVisibilityState()}
                    />
                  }
                  label="Privé"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      value={visibilityState}
                      checked={visibilityState}
                      onChange={() => handleVisibilityState()}
                    />
                  }
                  label="Public"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>

            <Typography
              color="secondary"
              gutterBottom
              variant="p"
              component="div"
              sx={{ fontWeight: "100", fontSize: "12px" }}
            >
              privé: votre projet ne sera pas publié sur la page d&apos;acceuil
              public votre projet sera visible en page d’acceuil
            </Typography>
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
          </CardContent>

          <CardActions
            sx={{
              diplay: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button color="error" onClick={handleOpen}>
              SUPRIMER LE PROJET
            </Button>
            <Link to={`/profile/patchproject/${project_id}`}>
              <Button color="primary" >
              EDITER LE PROJET
              </Button>
            </Link>            
            <Modal open={open} onClose={handleClose}>
              <Box sx={projectCollectStyles.modal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <WarningAmberIcon color="error" /> Valider la suppression
                </Typography>
                <Typography id="modal-modal-description" sx={{ my: 2 }}>
                  Souhaitez vous réellement supprimer votre projet ?
                </Typography>
                <Button
                  color="error"
                  sx={{ mr: 2, width: "47%" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  ANNULER
                </Button>
                <Button
                  color="primary"
                  sx={{ width: "47%" }}
                  variant="outlined"
                  onClick={() => handleDeleteProject()}
                >
                  VALIDER
                </Button>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      )}
    </>
  );
}

ProjectCollect.propTypes = {};

ProjectCollect.defaultProps = {};

export default React.memo(ProjectCollect);

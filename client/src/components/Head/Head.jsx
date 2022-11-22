/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";

// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import headImg from "../../assets/images/BigFrog.svg";
import HeadPlaceholder from "../UI/Placeholder/HeadPlaceholder";
// Material UI
import { Typography, Grid, Button, Container } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import AddchartIcon from "@mui/icons-material/Addchart";

// CSS
import palette from "../../assets/styles/_vars.scss";
import { headStyles } from "./styles";
import "./headStyles.scss";

import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";

function Head() {
  const ProfileInfo = useRecoilValue(profileConnexionstate);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="head">
      {!isLoading ? (
        <Container component="section" maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                color="secondary"
                sx={{ fontSize: "2rem", fontWeight: "bold" }}
              >
                Avec les solutions IdFrog
              </Typography>
              <Typography
                variant="h2"
                color="secondary"
                sx={{
                  fontSize: "2rem",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: palette.primary }}>JE DONNE </span>
                VIE !{" "}
                <span style={{ color: palette.primary }}>à mes idées</span>.
              </Typography>
              <Typography
                variant="h2"
                color="secondary"
                sx={{ fontSize: "1rem", marginBottom: "10px", fontWeight: 700 }}
              >
                Vous lancez un projet qui tient à cœur ?
              </Typography>
              <Typography
                color="secondary"
                variant="h2"
                sx={{ fontSize: "1rem", fontWeight: 700 }}
              >
                Et Vous avez besoin d'un coup de pouce financier ?
              </Typography>

              <Grid
                container
                spacing={5}
                sx={{
                  paddingTop: "50px",
                }}
              >
                <Grid item xs={12} md={6}>
                  {!ProfileInfo.isLogged ? (
                    <Link to="/subscribe">
                      <Button
                        variant="outlined"
                        endIcon={<InputIcon />}
                        size="medium"
                        sx={headStyles.btn}
                      >
                        Contribuer au projet
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/projects">
                      <Button
                        variant="outlined"
                        endIcon={<InputIcon />}
                        size="medium"
                        sx={headStyles.btn}
                      >
                        Contribuer au projet
                      </Button>
                    </Link>
                  )}
                </Grid>

                <Grid item xs={12} md={6}>
                  {!ProfileInfo.isLogged ? (
                    <Link to="/subscribe">
                      <Button
                        variant="contained"
                        endIcon={<AddchartIcon />}
                        sx={headStyles.btnWith}
                      >
                        Déposer mon projet
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/profile/postproject">
                      <Button
                        variant="contained"
                        endIcon={<AddchartIcon />}
                        sx={headStyles.btnWith}
                      >
                        Déposer mon projet
                      </Button>
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <img src={headImg} className="head-logo" alt="Head Footer"></img>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <HeadPlaceholder />
      )}
    </div>
  );
}
// Head.PropType = {};

Head.defaultProps = {};

export default React.memo(Head);

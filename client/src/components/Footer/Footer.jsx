/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import logoFooter from "../../assets/images/logo-mini.png";

// Material UI
import { Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// CSS
import palette from "../../assets/styles/_vars.scss";
import "./footerStyles.scss";

function Footer() {
  return (
    <div className="footer">
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          marginBottom: "10px",
          paddingBottom: "5px",
          paddingTop: "30px",
        }}
      >
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Link className="lien" to="#">
            Conditions d'utilisation
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Link className="lien" to="#">
            Mentions légales
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Link to="/">
            <img
              src={logoFooter}
              className="footer-logo"
              alt="Logo Footer"
            ></img>
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Link className="lien" to="#">
            Politique de confidentialité
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center" }}>
          <Link className="lien" to="/faq">
            FAQ
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderTop: `1px solid ${palette.secondary}`,
          paddingTop: "20px",
        }}
      >
        <Grid>
          <Typography color="secondary">
            Tous droits réservés © IDFROG, 2022
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        spacing={3}
        sx={{
          paddingTop: "20px",
        }}
      >
        <Grid item>
          <Link href="#" color="secondary">
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="secondary">
            <FacebookIcon />
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="secondary">
            <TwitterIcon />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
// Footer.PropType = {};

Footer.defaultProps = {};

export default React.memo(Footer);

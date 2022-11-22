/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import logoFooter from "../../assets/images/logo-mini.png"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./footerStyles.scss";

function Footer() {
  return (
    <div className="footer">
      <Grid container 
        spacing={5} 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "-22px",
          marginBottom: "10px",
          paddingBottom: "5px",
          paddingTop: "30px"
        }}
        
      >
        <Grid item xs={12} sm={2} sx={{ textAlign: "center",paddingLeft: "0px!important"}}>
          <Link href="#" color="inherit" underline="hover">Conditions d'utilisation</Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center",paddingLeft: "0px!important" }}>
          <Link href="#" color="inherit" underline="hover">Mentions légales</Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center",paddingLeft: "0px!important" }}>
          <Link href="#"><img src={logoFooter} className="footer-logo" alt="Logo Footer"></img></Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center",paddingLeft: "0px!important" }}>
          <Link href="#" color="inherit" underline="hover">Politique de confidentialité</Link>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ textAlign: "center",paddingLeft: "0px!important" }}>
          <Link href="#" color="inherit" underline="hover">FAQ</Link>
        </Grid>
      </Grid>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderTop: "1px solid black",
          paddingTop: "20px"
        }}
        
      >
        <Grid>
          <Typography>Tous droits réservés © IDFROG, 2022</Typography>
        </Grid>
      </Grid>
      <Grid 
        container
        justifyContent="flex-end"
        spacing={3}
        sx={{
          paddingTop: "20px"
        }}
        
      >
        <Grid item  sx={{}}>
          <Link href="#" color="inherit"><LinkedInIcon /></Link>
        </Grid>
        <Grid item  sx={{}}>
          <Link href="#" color="inherit"><FacebookIcon /></Link>
        </Grid>
        <Grid item  sx={{}}>
          <Link href="#" color="inherit"><TwitterIcon /></Link>
        </Grid>
      </Grid>

    </div>
  );
}
// Footer.PropType = {};

Footer.defaultProps = {};

export default React.memo(Footer);
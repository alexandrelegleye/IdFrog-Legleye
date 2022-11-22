/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import notfoundImg from "../../assets/images/404 .svg"
import { Typography } from "@mui/material";
// CSS
import palette from "../../assets/styles/_vars.scss";


import "./notFoundStyles.scss";

function NotFound() {
  return (
    <div className='notfoundpage'>
      <Grid
        container
        direction="column"
        spacing={6}
        sx={{
        }}
      >
        <Grid item xs={12} sm={12} sx={{ textAlign: "left", marginBottom: "-40px" }}>
          <Typography variant="h1" color="" sx={{fontSize: "2rem", fontWeight: "bold"}}>Oups ! <span style={{ color: palette.primary }}>La page</span> que vous recherchez<span style={{ color: palette.primary }}>semble introuvable</span></Typography>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ textAlign: "center", marginBottom:"30px" }}>
          <img width="70%" src={notfoundImg} className="notfoundpage-logo" alt="Image 404 not found"></img>
        </Grid>
      </Grid>
    </div>
  );
}
// NotFound.PropType = {};

NotFound.defaultProps = {};

export default React.memo(NotFound);
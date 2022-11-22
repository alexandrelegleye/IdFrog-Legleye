import React from "react";
// import PropTypes from "prop-types";
import headImg from "../../../assets/images/notFound.svg";

// Material UI
import { Grid, Container, Typography } from "@mui/material";

// CSS
import "./notFoundStyles.scss";
import palette from "../../../assets/styles/_vars.scss";

function NotFound() {
  return (
    <div className="NotFound">
      <Container component="section" maxWidth="lg">
        <Grid container justifyContent="center" alignItems="center" p={10}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              pb: 2,
              width: { xl: "50%", xs: "100%" },
            }}
          >
            Oups ! <span style={{ color: palette.primary }}>La page</span> que
            vous recherchez
            <span style={{ color: palette.primary }}>
              semble introuvable...
            </span>
          </Typography>
          <Grid item xs={12} md={6}>
            <img src={headImg} alt="NotFound" className="img404"></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
// NotFound.PropType = {};

NotFound.defaultProps = {};

export default React.memo(NotFound);

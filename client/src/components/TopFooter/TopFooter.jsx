/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Matrerial UI
import { Typography, Button, Grid, Container } from "@mui/material";

// CSS
import palette from "../../assets/styles/_vars.scss";
import { topFooterStyles } from "./topFooterStyles";

function TopFooter() {
  return (
    <Container component="section" maxWidth="lg">
      <Grid

        container
        direction="row"
        spacing={3}
        sx={topFooterStyles.topFooterGrid}
      >
        <Grid item xs={12} md={8}>
          <Typography sx={topFooterStyles.boldFont}>
            Obtenez un financement non dilutif auprès de vos investisseurs.
          </Typography>
          <Typography sx={topFooterStyles.boldFont}>
            Levez de
            <span style={topFooterStyles.boldFontPrimary}> 10 000 € </span> à
            <span style={topFooterStyles.boldFontPrimary}> 500 000 €</span> à
            votre rythme, de manière publique ou privée
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/faq">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: palette.primary,
                color: "#fff",
                width: "100%",
              }}
            >
              Découvrez nos solutions
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>

  );
}
// TopFooter.PropType = {};

TopFooter.defaultProps = {};

export default React.memo(TopFooter);


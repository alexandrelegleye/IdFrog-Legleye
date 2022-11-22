import React from "react";
// import PropTypes from 'prop-types';

// Compoments
import Signin from "../../../components/UI/forms/Signin/Signin";
//Material UI
import { Container } from "@mui/material";
// CSS
import "./authentificationStyles.scss";

function Authentification() {
  return (
    <Container component="section" maxWidth="lg" sx={{ p: 2, height: "65vh" }}>
      <Signin />
    </Container>
  );
}
Authentification.propTypes = {};

Authentification.defaultProps = {};

export default React.memo(Authentification);

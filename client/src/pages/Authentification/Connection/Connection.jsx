import React from "react";
// import PropTypes from 'prop-types';

// Components
import Login from "../../../components/UI/forms/Login/Login";
// Material UI
import { Container } from "@mui/material";

function Connection() {
  return (
    <Container component="section" maxWidth="lg" sx={{ p: 2, height: "65vh" }}>
      <Login />
    </Container>
  );
}
Connection.propTypes = {};

Connection.defaultProps = {};

export default React.memo(Connection);

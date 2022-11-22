/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";

import { Navigate } from "react-router-dom";

const AuthProvider = ({children}) => {

  const ProfileInfo = useRecoilValue(profileConnexionstate);
  
  if(!ProfileInfo.isLogged){

    return <Navigate to="/login"/>
  }

  return children
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
  isLogged: PropTypes.bool,
};
AuthProvider.defaultProps = {};

export default AuthProvider;
/* eslint-disable react/prop-types */

import React, { useEffect } from "react";
// import PropTypes from 'prop-types';

// Materail UI
import { Skeleton, Box } from "@mui/material";

// Yup Schema

function ProfileFormPlaceholder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="profileForm" sx={{ p: 9 }}>
      <Skeleton
        variant="text"
        height={40}
        width="50%"
        sx={{ marginBottom: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: { xs: "100%", sm: "80%", md: "40%", lg: "40%", xl: "30%" },
        }}
      >
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width="40%" sx={{ mr: 2 }} />
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width="40%" />
      </Box>
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        height={40}
        width="15%"
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Skeleton variant="text" height={40} width="35%" />
      <Skeleton
        variant="text"
        height={100}
        width="100%"
        sx={{ marginBottom: "10px" }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="40%"
      >
        <Skeleton variant="text" width="50%" height={60} />
        <Skeleton variant="text" width="30%" height={60} />
      </Box>
    </Box>
  );
}
ProfileFormPlaceholder.propTypes = {};

ProfileFormPlaceholder.defaultProps = {};

export default ProfileFormPlaceholder;

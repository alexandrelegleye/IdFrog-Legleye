/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// import PropTypes from 'prop-types';

// Materail UI
import { Skeleton, Box } from "@mui/material";
// Yup Schema

function ProfileForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="profileForm" sx={{ p: 9 }}>
      <Skeleton variant="text" height={50} width="15%" />
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}
        width="40%"
      >
        <Skeleton variant="text" width="50%" height={50} />
        <Skeleton variant="text" width="30%" height={50} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: "60%",
        }}
      >
        <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            width: "80%",
          }}
        >
          <Skeleton variant="circular" width={20} height={20} sx={{ mr: 2 }} />
          <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
          <Skeleton variant="circular" width={20} height={20} sx={{ mr: 2 }} />
          <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
          <Skeleton variant="circular" width={20} height={20} sx={{ mr: 2 }} />
          <Skeleton variant="text" width="20%" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
          width: "40%",
        }}
      >
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 2 }} />
        <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 2 }} />
        <Skeleton variant="text" width="20%" sx={{ mr: 2 }} />
        <Skeleton variant="rounded" width={120} height={20} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        width="100%"
      >
        <Skeleton variant="text" width="48%" height={50} />
        <Skeleton variant="text" width="48%" height={50} />
      </Box>
      <Skeleton variant="text" width="100%" height={50} />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "8px" }}
        width="40%"
      >
        <Skeleton variant="text" width="50%" height={50} />
        <Skeleton variant="text" width="30%" height={50} />
      </Box>
    </Box>
  );
}
ProfileForm.propTypes = {};

ProfileForm.defaultProps = {};

export default ProfileForm;

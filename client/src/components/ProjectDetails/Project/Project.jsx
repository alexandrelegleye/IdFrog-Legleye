/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography } from "@mui/material";

const Project = ({ description, name }) => {
  return (
    <div>
      <Box sx={{ padding: "5px" }}>
        <Typography sx={{ fontWeight: "bold", pb: 1 }}> {name} :</Typography>
      </Box>
      <Box sx={{ padding: "5px" }}>
        <Typography sx={{ fontWeight: "bold", pb: 2 }}>
          c&apos;est quoi concrètement ?
        </Typography>
        <Typography sx={{ textAlign: "justify", pb: 2 }}>
          {description}
        </Typography>
      </Box>
    </div>
  );
};

export default Project;

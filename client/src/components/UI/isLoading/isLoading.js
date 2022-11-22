import React from "react"
import {Box, LinearProgress} from "@mui/material";

export default function isLoading() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  )
}

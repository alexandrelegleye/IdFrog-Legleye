/* eslint-disable react/prop-types */
import React from "react"

// Material UI
import {Button} from "@mui/material";

const CommonButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default CommonButton;
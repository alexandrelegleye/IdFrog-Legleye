import React from "react";
import { Skeleton } from "@mui/material";

function SideBarPlaceholder() {
  return (
    <>
      <Skeleton animation="wave" height={70} />
      <Skeleton animation="wave" height={80} />
      <Skeleton animation="wave" height={80} sx={{ mb: 20 }} />
    </>
  );
}

export default React.memo(SideBarPlaceholder);

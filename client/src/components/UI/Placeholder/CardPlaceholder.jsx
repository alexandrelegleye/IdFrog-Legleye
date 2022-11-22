import React from "react";
import { Card, Skeleton, CardActions, Box } from "@mui/material";

const ProjectCardPlaceholder = () => {
  return (
    <Card sx={{ marginLeft: 2, marginBottom: 2, marginTop: 1 }}>
      <Skeleton
        height={160}
        width={373}
        animation="wave"
        variant="rectangular"
      />
      <Box sx={{ p: 2 }}>
        <Skeleton height={18} style={{ width: "20%", marginBottom: 10 }} />
        <Skeleton height={30} style={{ width: "40%", marginTop: 0 }} />
        <Skeleton height={16} style={{ marginTop: 0 }} />
        <Skeleton height={16} style={{ marginTop: 0 }} />
        <Skeleton height={16} style={{ marginTop: 0 }} />
        <Skeleton height={16} style={{ marginBottom: 60 }} />
        <Skeleton
          height={20}
          style={{ marginTop: 22, width: "40%", height: 20 }}
        />
        <Skeleton height={10} count={3} style={{ marginTop: 4 }} />
      </Box>
      <CardActions>
        <Skeleton
          animation="wave"
          height={40}
          width="80%"
          style={{ marginTop: 14 }}
        />

        <Skeleton
          animation="wave"
          height={40}
          width="60%"
          style={{ marginTop: 14 }}
        />
      </CardActions>
    </Card>
  );
};

export default ProjectCardPlaceholder;

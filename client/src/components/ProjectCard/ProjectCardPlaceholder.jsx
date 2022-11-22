import React from "react";
import { Card, Skeleton, Box } from "@mui/material";
const ProjectCardPlaceholder = () => {
  return (
    <Card sx={{ width: "374px", height: "472px" }}>
      <Skeleton variant="rectangular" height={140} width={374} />
      <Box sx={{ marginLeft: "20px" }}>
        <Skeleton height={21} width={80} style={{ marginTop: 14 }} />
        <Skeleton
          variant="h1"
          height={21}
          width={160}
          style={{ marginTop: 14 }}
        />
        <Skeleton
          height={20}
          width={340}
          style={{ marginTop: 30, marginBottom: 22 }}
        />
        <Skeleton
          height={20}
          width={340}
          style={{ marginTop: 10, marginBottom: 22 }}
        />
        <Skeleton
          height={10}
          width={340}
          style={{ marginTop: 50, marginBottom: 22 }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton
            height={60}
            width={170}
            style={{ marginTop: 10, marginBottom: 22, borderRadius: "30px" }}
          />
          <Skeleton
            height={60}
            width={90}
            style={{
              marginTop: 10,
              marginBottom: 22,
              marginRight: "20px",
              borderRadius: "30px",
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ProjectCardPlaceholder;

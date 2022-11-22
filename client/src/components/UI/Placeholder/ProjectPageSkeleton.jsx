import React from "react";
import { Card, Skeleton, Grid, CardActions, CardContent } from "@mui/material";

const ProjectCardPlaceholder = () => {
  return (
    <Grid container spacing={5} sx={{ px: 5, pb: 5, pt: 2 }}>
      <Grid item xs={12} md={12}>
        <Skeleton
          animation="wave"
          height={50}
          width="15%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={2}
          width="65%"
          style={{ marginBottom: 2 }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Skeleton
          animation="wave"
          height="220px"
          width="99%"
          variant="rectangular"
          style={{ marginBottom: 6, marginTop: "-20px" }}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="20%"
          style={{ marginTop: 14 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          style={{ marginTop: 10, marginBottom: 4 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          count={3}
          style={{ marginTop: 4 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          count={3}
          style={{ marginTop: 4 }}
        />
      </Grid>
      <Grid item xs={12} md={4} sx={{ mt: 1 }}>
        <Card sx={{ marginLeft: 0, marginBottom: 2, marginTop: 0, padding: 2 }}>
          <CardContent>
            <Skeleton
              animation="wave"
              height={14}
              width="40%"
              style={{ marginTop: 22 }}
            />
            <Skeleton animation="wave" height={24} style={{ marginTop: 22 }} />

            <Skeleton
              animation="wave"
              height={20}
              style={{ marginTop: 10, marginBottom: 40 }}
            />
            <Skeleton
              animation="wave"
              height={30}
              width="40%"
              style={{ marginTop: 10, marginBottom: 0 }}
            />
            <Skeleton
              animation="wave"
              height={14}
              count={3}
              style={{ marginTop: 4 }}
            />
          </CardContent>
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
              width="90%"
              style={{ marginTop: 14 }}
            />
          </CardActions>
        </Card>
        <Card sx={{ marginLeft: 0, marginBottom: 2, marginTop: 2, padding: 2 }}>
          <Skeleton animation="wave" height={24} style={{ marginTop: 22 }} />
          <Skeleton
            animation="wave"
            height={20}
            style={{ marginTop: 10, marginBottom: 2 }}
          />
          <CardActions sx={{ mx: 20 }}>
            <Skeleton
              animation="wave"
              height={21}
              width="60%"
              style={{ marginTop: 2 }}
            />
            <Skeleton
              animation="wave"
              height={21}
              width="60%"
              style={{ marginTop: 4 }}
            />
          </CardActions>
          <Skeleton
            animation="wave"
            height={14}
            count={3}
            style={{ marginTop: 4 }}
          />
          <Skeleton
            animation="wave"
            height={30}
            width="90%"
            style={{ marginTop: 14 }}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={12} sx={{ mt: -4 }}>
        <Skeleton
          animation="wave"
          height={60}
          style={{ marginTop: 10, marginBottom: 22 }}
        />
        <Skeleton
          animation="wave"
          height={21}
          width="20%"
          style={{ marginTop: 14 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          count={3}
          style={{ marginTop: 4 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          count={3}
          style={{ marginTop: 4 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          count={3}
          style={{ marginTop: 4 }}
        />
        <Skeleton
          animation="wave"
          height={14}
          count={3}
          style={{ marginTop: 4 }}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectCardPlaceholder;

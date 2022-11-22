import React from "react";
// Material UI
import { Grid, Container, Skeleton } from "@mui/material";

function HeadPlaceholder() {
  return (
    <Container component="section" maxWidth="lg">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" height={50} width="70%" />
          <Skeleton
            animation="wave"
            height={50}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="50%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="60%"
            style={{ marginBottom: 6 }}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Skeleton animation="wave" height={70} width="100%" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Skeleton animation="wave" height={70} width="100%" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Skeleton
            animation="wave"
            variant="circular"
            sx={{
              width: { xs: 300, sm: 500, md: 350, lg: 400, xl: 400 },
              height: { xs: 300, sm: 500, md: 350, lg: 400, xl: 400 },
              ml: { xs: "auto", sm: "auto", md: 10, lg: 20, xl: 20 },
              mr: { xs: "auto", sm: "auto", md: 1, lg: 2, xl: 2 },
              mt: { xs: 3, sm: 5, md: 3, lg: 9, xl: 9 },
              mb: { xs: 3, sm: 5, md: 8, lg: 10, xl: 10 },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeadPlaceholder;

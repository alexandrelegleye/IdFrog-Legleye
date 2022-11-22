import React from "react";
import { Box, Skeleton, CardContent, Card } from "@mui/material";

function PostProjectPlaceholder() {
  return (
    <Box
      className="postProjectForm"
      sx={{ px: { xl: 2, md: 2, xs: 0 }, mt: { xl: -1, md: 0, xs: 5 } }}
    >
      <Skeleton animation="wave" height={70} width="30%" />
      <Skeleton animation="wave" height={70} width="100%" sx={{ mt: -1 }} />
      <Box sx={{ display: "flex" }}>
        <Skeleton
          animation="wave"
          height={90}
          width="100%"
          sx={{ mr: 4, mt: -1 }}
        />

        <Skeleton animation="wave" height={90} width="100%" sx={{ mt: -1 }} />
      </Box>
      <Box>
        <Skeleton animation="wave" height={90} width="48.6%" sx={{ mt: -2 }} />

        <Skeleton
          animation="wave"
          height="150px"
          width="100%"
          sx={{ mt: -4 }}
        />

        <Skeleton animation="wave" height={70} width="40%" sx={{ mt: -2 }} />

        <Skeleton
          animation="wave"
          height="250px"
          width="100%"
          sx={{ mt: -4 }}
        />

        <Skeleton animation="wave" height={70} width="50%" sx={{ mt: -4 }} />

        <Skeleton animation="wave" height={90} width="100%" />

        <Skeleton animation="wave" height={70} width="60%" />
        <Skeleton animation="wave" height={20} width="70%" />

        <Card sx={{ width: "100%", mb: 4, mt: 2 }}>
          <CardContent sx={{ m: 1 }}>
            <Box sx={{ display: "flex" }}>
              <Skeleton
                animation="wave"
                height={30}
                width={30}
                variant="circular"
                sx={{ mr: 4 }}
              />
              <Box width="30%">
                <Skeleton
                  animation="wave"
                  width="60%"
                  height={40}
                  sx={{ mt: -1 }}
                />
                <Skeleton animation="wave" height={20} />
              </Box>

              <Skeleton
                animation="wave"
                height={30}
                width={30}
                variant="circular"
                sx={{ ml: "60%" }}
              />
            </Box>
            <Box sx={{ display: "flex", mt: 4 }}>
              <Skeleton
                animation="wave"
                height={30}
                width={30}
                variant="circular"
                sx={{ mr: 4 }}
              />
              <Box width="30%">
                <Skeleton
                  animation="wave"
                  width="60%"
                  height={40}
                  sx={{ mt: -1 }}
                />
                <Skeleton animation="wave" height={20} />
              </Box>

              <Skeleton
                animation="wave"
                height={30}
                width={30}
                variant="circular"
                sx={{ ml: "60%" }}
              />
            </Box>
          </CardContent>
        </Card>

        <Skeleton animation="wave" height={30} width="30%" />

        <Box sx={{ display: "flex" }}>
          <Skeleton
            animation="wave"
            height={90}
            width="100%"
            sx={{ mr: 4, mt: -1 }}
          />

          <Skeleton animation="wave" height={90} width="100%" sx={{ mt: -1 }} />
        </Box>

        <Box sx={{ display: "flex" }}>
          <Skeleton
            animation="wave"
            height={70}
            width="20%"
            sx={{ mr: 4, mt: -1 }}
          />

          <Skeleton animation="wave" height={70} width="10%" sx={{ mt: -1 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(PostProjectPlaceholder);

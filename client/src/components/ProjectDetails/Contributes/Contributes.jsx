/* eslint-disable react/prop-types */
import React from "react";

// Material UI
import { Grid, Typography, Box, Avatar } from "@mui/material";
// CSS
import palette from "../../../assets/styles/_vars.scss";
import { projectContributStyles } from "./styles";
import AvatarLog from "../../../assets/images/avatar-user.png";

const Comments = ({ contributes }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Grid container>
      {contributes.map((contribute) => (
        <Grid item xs={12} md={6} key={contribute.id} sx={{ p: 1 }}>
          <Box sx={projectContributStyles.avatarBox}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="IdFrog"
              src={AvatarLog}
            ></Avatar>
            <Box sx={projectContributStyles.pseudoBox}>
              <Typography sx={{ fontWeight: "bold", color: palette.primary }}>
                {contribute.profile.pseudo}
              </Typography>
              <Typography sx={projectContributStyles.date}>
                {new Date(contribute.created_at).toLocaleDateString(
                  "fr-FR",
                  options
                )}
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ borderBottom: "1px solid lightgrey", p: 1 }}>
            Contribution de : {contribute.invested_amount}€
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;

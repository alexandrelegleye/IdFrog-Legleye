/* eslint-disable react/prop-types */
import React from "react";

// Material UI
import { Grid, Typography, Box, Avatar } from "@mui/material";
// CSS
import palette from "../../../assets/styles/_vars.scss";
import { projectCommentStyles } from "./styles";
import AvatarLog from "../../../assets/images/avatar-user.png";
const Comments = ({ comments }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Grid container>
      {comments.map((comment) => (
        <Grid item xs={12} md={6} key={comment.id} sx={{ p: 1 }}>
          <Box sx={projectCommentStyles.avatarBox}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="IdFrog"
              src={AvatarLog}
            ></Avatar>
            <Box sx={projectCommentStyles.pseudoBox}>
              <Typography sx={{ fontWeight: "bold", color: palette.primary }}>
                {comment.profile.pseudo}
              </Typography>
              <Typography sx={projectCommentStyles.date}>
                {new Date(comment.created_at).toLocaleDateString(
                  "fr-FR",
                  options
                )}
              </Typography>
            </Box>
          </Box>

          <Typography sx={projectCommentStyles.subtitle}>
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;

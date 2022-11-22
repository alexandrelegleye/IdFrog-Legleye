/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SimpleShareButtons } from "react-simple-share";
// Material UI
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

// CSS
import { projectCardStyles } from "./styles";

// import PropTypes from "prop-types";

// import topCardImage from '../../assets/images/PlaceholderImage.jpg';
import ProjectProgress from "../ProjectProgress/ProjectProgress";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { profileConnexionstate } from "../../atomes/profileAtomes";

function ProjectCard({
  id,
  projet,
  amount,
  description,
  profile,
  createdAt,
  contributions,
  img_url,
}) {

  const baseUrl = process.env.REACT_APP_BASEURL
  
  const options = {
    /* weekday: 'long' ,*/ year: "numeric",
    month: "short",
    day: "numeric",
  };

  const [totalContributions, setTotalContributions] = useState(0);
  const [progressRatio, setProgressRatio] = useState(0);

  const progressRate = (contributionslist) => {
    let totalContribution = 0;
    if (contributionslist?.length === 0) {
      setTotalContributions(0);
      setProgressRatio(0);
    }
    contributionslist?.map(
      (contribution) => (totalContribution += contribution.invested_amount)
    );
    const rate = Number((100 * totalContribution) / amount);
    setTotalContributions(totalContribution);
    setProgressRatio(rate);
  };

  useEffect(() => {
    progressRate(contributions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ProfileInfo = useRecoilValue(profileConnexionstate);

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <Link to={`/project/${id}`}>
        <CardMedia
          component="img"
          height="140"
          src={`${baseUrl}${img_url}`}
          alt={projet}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
            {profile} •{" "}
            {new Date(createdAt).toLocaleDateString("fr-FR", options)}
          </Typography>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="div"
          >
            {projet}
          </Typography>
          <Typography color="secondary.light" sx={projectCardStyles.summary}>
            {description}
          </Typography>
        </CardContent>
      </Link>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="secondary" gutterBottom>
          {totalContributions}€ sur{" "}
          <span style={{ fontSize: 24 }}>{amount}€</span>
        </Typography>
        <ProjectProgress progressRate={progressRatio} />
      </CardContent>

      <CardActions sx={projectCardStyles.cardAction}>
        {!ProfileInfo.isLogged ? (
          <Link to="/login">
            <Button size="small" sx={projectCardStyles.btnPrimary}>
              Contribuer au projet &gt;
            </Button>
          </Link>
        ) : (
          <Link to={`/profile/contribut/${id}`}>
            <Button size="small" sx={projectCardStyles.btnPrimary}>
              Contribuer au projet &gt;
            </Button>
          </Link>
        )}

        <Box size="small" sx={projectCardStyles.btnSecondary}>
          Partager sur&nbsp;:&nbsp;
          <SimpleShareButtons
            whitelist={["Facebook", "Twitter", "LinkedIn"]}
            size="28px"
          />
        </Box>
      </CardActions>
    </Card>
  );
}
ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default React.memo(ProjectCard);

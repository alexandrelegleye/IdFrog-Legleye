/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Material UI
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";

function DropDownProjectList({ projectList }) {
  const [openProject, setOpenProject] = useState(false);

  const handleClickProject = () => {
    setOpenProject(!openProject);
  };

  return (
    <List // liste projets
      sx={{ width: "100%", justifyContent: "space-between" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          backgroundColor: "#ffffff!important",
        }}
        onClick={handleClickProject}
      >
        <ListItemIcon color="secondary">
          <AppsIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Liste des projets" />
        {openProject ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openProject} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: "#ffffff80" }}
        >
          {projectList?.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText
                  sx={{ textAlign: "center" }}
                  primary={project.name}
                />
              </ListItemButton>
              <Divider />
            </Link>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
DropDownProjectList.propTypes = {};

DropDownProjectList.defaultProps = {};

export default React.memo(DropDownProjectList);

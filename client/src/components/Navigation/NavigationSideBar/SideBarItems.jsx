/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Components
import DropDownProjectList from "./DropDownProjectList";
import DropDownContributionList from "./DropDownContributionList";

// Material UI
import { Box, List } from "@mui/material";

// CSS
import "./navigationSideBarStyles.scss";

function SideBarItems({
  projectList,
  contributionList
}) {

  // Open toogle Drawer
  const [state, setState] = useState({left: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Box
        role="presentation"
        onClick={toggleDrawer(true)}
        onKeyDown={toggleDrawer}
      >
        <List>
          <DropDownProjectList projectList={projectList} />
        </List>
        <List>
          <DropDownContributionList contributionList={contributionList} />
        </List>
      </Box>
    </div>
  );
}

SideBarItems.propTypes = {};

SideBarItems.defaultProps = {};

export default React.memo(SideBarItems);

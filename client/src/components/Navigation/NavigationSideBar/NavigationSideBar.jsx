/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import SideBarItems from "./SideBarItems";
import ButtonProject from "./ButtonProject";
import SideBarPlaceholder from "../../UI/Placeholder/SideBarPlaceholder";
// Material UI
import { Button, Drawer, Box, Divider } from "@mui/material";

import IdfrogLogo from "../../../assets/images/logo-mini.png";
import FrogMenu from "../../../assets/images/frogmenu.png";
// CSS
import "./navigationSideBarStyles.scss";

import palette from "../../../assets/styles/_vars.scss";
import { navSideBarStyles } from "./styles";

function NavigationSideBar({
  projectList,
  contributionList,
  isLoading
}) { 

  // Open toogle mobile
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    //console.log("NavigationSideBar is loading", isLoading);
  },[isLoading]);

  const list = () => (
    <Box sx={navSideBarStyles.drawerMobileBox}>
      <Link to="/">
        <img src={IdfrogLogo} alt="Mini Logo Idfrog" />
      </Link>
      <Box
        role="presentation"
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
      >
        <ButtonProject />
        <Divider />
      </Box>
      <SideBarItems
        projectList={projectList}
        contributionList={contributionList}
      />
    </Box>
  );

  return (
    <>
      <Box sx={navSideBarStyles.frogMenu}>
        <Button onClick={handleDrawerToggle}>
          <img src={FrogMenu} alt="MenuIdfrog" />
        </Button>
      </Box>
      {projectList ? (
        <div className="navigationSideBar">
          <ButtonProject />
          <SideBarItems
            projectList={projectList}
            contributionList={contributionList}
          />
        </div>
      ) : (
        <div className="navigationSideBar">
          <SideBarPlaceholder />
        </div>
      )}

      <div className="drawerMobile">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              variant="temporary"
              anchor={anchor}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  backgroundColor: palette.primary,
                  border: "none",
                },
              }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

NavigationSideBar.propTypes = {};

NavigationSideBar.defaultProps = {};

export default React.memo(NavigationSideBar);

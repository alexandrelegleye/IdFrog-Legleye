/* eslint-disable react/prop-types */

import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  profileConnexionstate,
  profileDetailState,
} from "../../../atomes/profileAtomes";
import { getLogout } from "../../../services/loginService";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import IdfrogLogo from "../../../assets/images/logo-mini.png";
import AvatarLog from "../../../assets/images/avatar-connect.png";

// Material UI
import {
  Avatar,
  Typography,
  MenuItem,
  Button,
  Grid,
  Container,
  Menu,
  IconButton,
  Toolbar,
  AppBar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// CSS
import { navHeaderStyles } from "./styles";

function ResponsiveAppBar() {
  const ProfileInfo = useRecoilValue(profileConnexionstate);

  const ResetProfileInfo = useResetRecoilState(profileConnexionstate);
  const ResetProfileDetailState = useResetRecoilState(profileDetailState);

  // console.log('ProfileInfo dans la navbar', ProfileInfo);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = async () => {
    // eslint-disable-next-line no-unused-vars
    const res = await getLogout();
    //console.log(res);

    ResetProfileInfo();
    ResetProfileDetailState();
    localStorage.clear();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src={IdfrogLogo}
              alt="Mini Logo Idfrog"
              style={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                padding: "0.4em",
              }}
            />
          </Link>
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="with"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {ProfileInfo.isLogged ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography color="primary.dark">
                    <Link to="profile">Mon Profile</Link>
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography color="primary.dark">
                    <Link to="subscribe">Lancer mon projet</Link>
                  </Typography>
                </MenuItem>
              )}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography color="primary.dark">
                  <Link to="projects">Liste des Projets</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {ProfileInfo.isLogged ? (
              <Link to="profile">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={navHeaderStyles.btnPostProject}
                >
                  Mon Profil
                </Button>
              </Link>
            ) : (
              <Link to="subscribe">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={navHeaderStyles.btnPostProject}
                >
                  Lancer mon projet
                </Button>
              </Link>
            )}
            <Link to="projects">
              <Button
                onClick={handleCloseNavMenu}
                sx={navHeaderStyles.btnListProject}
              >
                Liste des Projets
              </Button>
            </Link>
          </Box>

          <Box>
            <div>
              {ProfileInfo.isLogged ? (
                <Grid container>
                  <Grid item sx={{ xs: 6 }}>
                    <Link to={"/profile/"}>
                      <div style={navHeaderStyles.loginUser}>
                        <Avatar
                          sx={{ bgcolor: "#2D3A4D" }}
                          alt="IdFrog"
                          src={AvatarLog}
                        ></Avatar>
                        <Box
                          sx={{
                            flexGrow: 1,
                            px: 1,
                            display: { xs: "none", md: "flex" },
                          }}
                        >
                          {ProfileInfo.pseudo}
                        </Box>
                      </div>
                    </Link>
                  </Grid>
                  <Grid item sx={{ xs: 6 }}>
                    <Link to={"/profile/logout"}>
                      <Button
                        size="small"
                        sx={navHeaderStyles.btnSecondary}
                        onClick={() => {
                          handleLogout();
                        }}
                      >
                        Se déconnecter
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Link to="subscribe">
                    <Button size="small" sx={navHeaderStyles.btnPrimary}>
                      inscription
                    </Button>
                  </Link>
                  <Link to="login">
                    <Button size="small" sx={navHeaderStyles.btnSecondary}>
                      connexion
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

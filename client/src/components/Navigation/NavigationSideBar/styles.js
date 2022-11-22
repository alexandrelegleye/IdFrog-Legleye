import palette from "../../../assets/styles/_vars.scss"
const drawerWidth = 310;

export const navSideBarStyles ={

  drawerMobileBox:{
    backgroundColor: palette.primary, 
    p: 2, height: "100vh", 
    pt: 2
  },
    
  sideBar: {
    display: "flex",
  },
  drawer: {
    width: { xs: "80%", sm: drawerWidth, md: "80%", lg:"80%", xl: "80%" },
    flexShrink: { xs: 2, sm: 0, md: 2, lg: 2, xl: 2 },

     
  },
  appBar: {
    width: { xs: "80%", sm: `calc(100% - ${drawerWidth}px)`, md: "80%", lg: "80%", xl: "80%" },
    marginLeft: { xs: 100, sm: drawerWidth, md: 100, lg: 100, xl: 100 },
  },
  menuButton: {
    display: { xs: "block", sm: "none", md: "none", lg: "none", xl: "none" },
    marginRight: 2,
  },
  frogMenu:{
    position: "fixed",
    zIndex: 1,
    display: { xs: "block", md: "none" },
  }
      
};

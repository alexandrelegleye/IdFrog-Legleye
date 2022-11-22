
import palette from "../../../assets/styles/_vars.scss"

export const navHeaderStyles ={

  btnPrimary:{
    fontSize: 14,
    backgroundColor: "#ffffff",
    background: " rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
    fontWeight: 700,
    margin: "2px",
    textTransform: "none",
    borderRadius: "50px",
    padding: "4px 10px",
  
    "&:hover": {
      color: palette.secondary,
      backgroundColor: "#ffffff",
      background: " rgba(0, 0, 0, 0.1)",
 
    },
  },

  btnSecondary: {
    fontSize: 14,
    backgroundColor: palette.primary,
    background: " rgba(0, 0, 0, 0.1)",
    color: palette.secondary,
    fontWeight: 700,
    margin: "2px",
    textTransform: "none",
    borderRadius: "50px",
    padding: "4px 10px",
    "&:hover": {
      color: palette.secondary,
      backgroundColor: palette.primary,
      background: " rgba(0, 0, 0, 0.2)",
    },
  },

  btnListProject:{
    pt: 4,
    pb: 4,
    color: "white",
    display: "block",
    "&:hover": {
      backgroundColor: palette.primary,
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "0px",
    },
  },

  btnPostProject:{
    pt: 4,
    pb: 4,
    mx: 1,
    color: "white",
    display: "block",
    "&:hover": {
      backgroundColor: palette.primary,
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "0px",
    },
  },
  loginUser:{
    display: "flex",
    alignItems: "center",
    color: palette.secondary,
    transition: "all 0.5s ease-in-out",
  
  },
  p:{
    paddingLeft: "0.5rem",
    textAlign: "right",
    color: palette.secondary,

  },
  pseudoText:{
    paddingLeft: "0.5rem",
    textAlign: "right",
    color: palette.secondary,
    display: { xs: "none", md: "none" } 

  },

};
// CSS VARS
import palette from "../../assets/styles/_vars.scss"

export const projectCollectStyles = {

  btnPrimary: {
    fontSize: 14,
    backgroundColor: palette.primary,
    border: "2px solid palette.primary",
    color: "#ffffff",
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "50px",
    padding: "5px 10px",
    "&:hover": {
      color: "#5de4d5",
    },
  },

  btnSecondary:{
    fontSize: 14,
    color: palette.secondary,
    fontWeight: "400",
    textTransform: "none",
    borderRadius: "50px",
    padding: "5px 10px",
  },

  card:{
    maxWidth: "100%",
    mt: 4,
    mx:4,
    textAlign: "center",
    m: { xl: 2, md: 2, xs: 2 }
  },

  carAction:{
    display: "flex",
    justifyContent: "space-between",
    mb: 1,
    p: 1,
  },
  modal:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    border: "2px solid palette.primary",
    boxShadow: 24,
    p: 2,
  }



};
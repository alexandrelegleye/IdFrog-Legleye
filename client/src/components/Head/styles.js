import palette from "../../assets/styles/_vars.scss"
export const headStyles = {
  btn:{
    width: "100%",
    fontWeight: 700,
    border: `2px solid ${palette.primary}`,
    "&:hover": {
      color: palette.secondary,
      backgroundColor: palette.primary,
      border: `2px solid ${palette.primary}`,
      background: " rgba(0, 0, 0, 0.1)",
    },
  },

  btnWith:{
    width: "100%",
    color: "#fff",
    
  }

}
// CSS VARS
import palette from "../../../assets/styles/_vars.scss"

export const projectContributStyles = {
    
  avatarBox:{
    display: "flex",
    alignItems: "center",
    color: palette.secondary,
    transition: "all 0.5s ease-in-out",
  },
  pseudoBox:{
    flexGrow: 1,
    px: 1,
  },
  title:{
    fontSize: "0.7rem", pl: 1,
    color: palette.secondary,
  },
  date:{
    fontSize: "0.7rem",  pt: 0.2,
    color: palette.secondary,
  },
  subtitle:{
    borderBottom: "1px solid lightgrey", p: 1 ,
    color: palette.secondary,
  }
};
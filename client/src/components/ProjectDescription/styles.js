// CSS VARS
import palette from "../../assets/styles/_vars.scss"

export const projectDescriptionStyles = {

  img:{
    width: { xl: "98.8%", md: "98.2%", xs: "100%" },
    m: { xl: 0, md: 0, xs: 0 },
    pl: { xl: 4, md: 4, xs: 0 },
  },
    
  title:{
    color: palette.secondary,
    fontSize: "2rem",
    borderBottom: `2px solid ${palette.primary}`,
    mb: 1,
    pb: 1,
    mt: { xl: 0, md: 0, xs: 0 },
  },
  title2:{
    color: palette.secondary,
    borderBottom: `1px solid ${palette.info}`,
    width:"100%",
    mb: 1,
    pb: 1,
  },
  subtitle:{
    color: palette.secondary,
  }
};
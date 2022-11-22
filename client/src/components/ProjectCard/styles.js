import palette from "../../assets/styles/_vars.scss"

export const projectCardStyles = {

  summary:{
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },


  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    padding: "15px",
  },

  btnPrimary:{
    fontSize: 14,
    backgroundColor: "#5de4d5",
    border: "2px solid #5de4d5",
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
    // backgroundColor: "#d9d9d9",
    // border: "2px solid #d9d9d9",
    color: palette.secondary,
    fontWeight: "400",
    textTransform: "none",
    borderRadius: "50px",
    padding: "5px 10px",
    // "&:hover": {
    //   backgroundColor: "#f5f5f5",
    //   color: "#30394e",
    // },
  },
 
};
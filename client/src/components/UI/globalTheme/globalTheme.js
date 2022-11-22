import { createTheme } from "@mui/material/styles";
import palette from "../../../assets/styles/_vars.scss"

export const globalTheme = createTheme({
  MuiButton: {
    styleOverrides: {
      contained: {
        fontSize: "0.875rem"
      },
    },
  },
  palette: {
    primary: {
      light:"#AFF7EE",
      main: palette.primary,
      dark: "#4FC2B4",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },

    secondary: {
      light:"#686D75",
      main: palette.secondary,
      dark: "#DBE6F7",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },

    warning:{
      light:"#D9E5F7",
      main: palette.warning,
      dark: "#A64C24",
    },

    error: {
      light:"#F47F7F",
      main: palette.error,
      dark: "#733C3C",
    },

    info:{
      light:"#F5F5F5",
      main: palette.info,
      dark: "#7D7D7D",
    },

    success:{
      light:"#A4E8E0",
      main: palette.success,
      dark: "#37B0A2",
    },

    custom: {
      light:"#5BFCEA",
      main: "#2D394C",
      dark: "#2D3A4D",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },

    with:{
      main: "#FFFFFF"
    }
  
  },
  typography: {
    fontFamily: [
      "Roboto",
      "\"Helvetica Neue\"",
      "Arial",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\"",
    ].join(","),
    
  },
  
  //spacing: [0, 4, 8, 16, 32, 64],
});

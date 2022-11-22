import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { globalTheme } from "./components/UI/globalTheme/globalTheme"
import { RecoilRoot } from "recoil";

import App from "./App";

// CSS
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
  <RecoilRoot>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);

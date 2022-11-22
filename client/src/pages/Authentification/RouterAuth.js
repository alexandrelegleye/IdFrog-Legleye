import React from "react";
import { Routes, Route } from "react-router-dom"

// Compoments
import LayoutAuth from "./LayoutAuth";
import Authentification from "../../pages/Authentification/Auth/Authentification"
import NotFound from "../../components/UI/NotFound/NotFound"

const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutAuth/>}>
        <Route index element={<Authentification/>}/>

        <Route path="subscribe" element={<Authentification/>}/>

        <Route path="*" element={<NotFound/>}/>

      </Route>
    </Routes>
  );
};

export default AuthRouter;
import React from "react";
import { Routes, Route } from "react-router-dom"

// Components
import LayoutPublic from "../Public/LayoutPublic"
import Home from "../Public/Home/Home"
import AllProjects from "../Public/AllProjects/AllProjects"
import  NotFound  from "../../components/UI/NotFound/NotFound"
import Connection from "../Authentification/Connection/Connection";
import FaqPage from "./FaqPage/FaqPage"



const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutPublic />}>
        <Route index element={<Home />} />

        <Route path="" element={<Home />} />
        <Route path="projects" element={<AllProjects />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="login" element={<Connection/>}/>
 
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
};

export default PublicRouter;
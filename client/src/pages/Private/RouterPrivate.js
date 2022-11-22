import React from "react";
import { Routes, Route } from "react-router-dom"
// Components
import NotFound from "../../components/UI/NotFound/NotFound";
import LayoutPrivate from "../Private/LayoutPrivate"
import Contribution from "./Contibution/Contribution";
import EditProject from "./EditProject/EditProject";
import PostProject from "./PostProject/PostProject";
import Profile from "./Profile/Profile";
import Project from "./Project/Project";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutPrivate/>}>
        <Route index element={<Profile/>}/>

        <Route path="profile" element={<Profile/>}/>
        <Route path="postproject" element={<PostProject/>}/>
        <Route path="patchproject/:id" element={<EditProject/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="contribut/:id" element={<Contribution/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default AdminRouter;
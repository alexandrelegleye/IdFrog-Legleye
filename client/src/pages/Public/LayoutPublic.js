import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="layoutPublic">
      <Outlet/>
    </div>
  );
};

export default LayoutPublic;
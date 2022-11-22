import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="layoutAuth">
      <Outlet/>
    </div>
  );
};

export default LayoutAuth;
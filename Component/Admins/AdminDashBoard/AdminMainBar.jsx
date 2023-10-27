import React from "react";
import { Outlet } from "react-router-dom";
let AdminMainBar = () => {
  return (
    <div id="MainBar">
      <Outlet />
    </div>
  );
};
export default AdminMainBar;

import React from "react";
import "./adminDashBoard.css"
import AdminSideBar from "./AdminSideBar";
import AdminMainBar from "./AdminMainBar";
let AdminDashboard = () => {
  return (
    <div id="adminDashBoard">
      <AdminSideBar/>
      <AdminMainBar/>
    </div>
  );
};
export default AdminDashboard;

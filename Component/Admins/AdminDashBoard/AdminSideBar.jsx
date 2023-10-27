import React from "react";
import { Link, useParams } from "react-router-dom";
let AdminSideBar = () => {
  return (
    <div id="sidebar">
      <h1 id="admin_dash"> ADMIN DASHBOARD </h1>
      <li><Link id="a1" to="/adminDashBoard/AcademyManagerRegister">Add Academy Manager</Link></li>
      <li><Link id="a2" to='/adminDashBoard/ViewAcademyManager'>View Academy Manager</Link></li>
      <li><Link id="a3" to="/adminDashBoard/ViewAcademy">View Academy</Link></li>
      <li><Link id="a4" to="/adminDashBoard/ViewBranch">View Branch</Link></li>
      <li><Link id="a5" to="/adminDashBoard/ViewCourse">View Course</Link></li>
      <li><Link id="a6" to="/">Home</Link></li>
    </div>
  );
};
export default AdminSideBar;
